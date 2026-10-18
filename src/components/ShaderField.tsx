"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

// Topographic noise field: domain-warped fbm with contour lines that glow around the pointer.
const vertex = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const fragment = `
precision mediump float;
uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;uniform float u_intro;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);
for(int i=0;i<5;i++){v+=a*noise(p);p=m*p;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  vec2 p=(gl_FragCoord.xy-.5*u_res)/u_res.y;
  vec2 m=(u_mouse-.5)*vec2(u_res.x/u_res.y,1.);
  float d=length(p-m);
  float t=u_time*.04;
  vec2 q=vec2(fbm(p*1.4+t),fbm(p*1.4+vec2(5.2,1.3)-t));
  vec2 r=vec2(fbm(p*1.4+3.5*q+vec2(1.7,9.2)+t*1.3+.5*exp(-d*3.)),fbm(p*1.4+3.5*q+vec2(8.3,2.8)-t));
  float f=fbm(p*1.4+3.5*r);
  float band=abs(fract(f*10.)-.5);
  float line=1.-smoothstep(.0,.05,band);
  vec3 bg=vec3(.047,.047,.043);
  vec3 col=bg+vec3(.07,.068,.062)*f*f;
  float glow=exp(-d*3.6);
  vec3 accent=vec3(1.,.36,.18);
  col+=line*vec3(.035,.034,.032)*u_intro;
  col=mix(col,accent,line*glow*.9*u_intro);
  col+=accent*glow*.04*u_intro;
  col*=1.-.45*pow(length(uv-.5)*1.25,2.);
  col+=(hash(gl_FragCoord.xy+fract(u_time*7.))-.5)*.04;
  gl_FragColor=vec4(col,1.);
}`;

export default function ShaderField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) {
      canvas.classList.add("is-fallback");
      return;
    }
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      canvas.classList.add("is-fallback");
      return;
    }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uIntro = gl.getUniformLocation(prog, "u_intro");

    const scale = Math.min(window.devicePixelRatio, 1.25) * (window.innerWidth < 768 ? 0.6 : 0.8);
    const resize = () => {
      canvas.width = Math.round(canvas.clientWidth * scale);
      canvas.height = Math.round(canvas.clientHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mouse = { x: 0.7, y: 0.4, tx: 0.7, ty: 0.4 };
    let lastMove = -1e9;
    const onMove = (e: PointerEvent) => {
      lastMove = performance.now();
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
    };
    window.addEventListener("pointermove", onMove);

    const reduced = prefersReducedMotion();
    let visible = true;
    let raf = 0;
    let intro = reduced ? 1 : 0;
    const start = performance.now();
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      if (now - lastMove > 4000) {
        // No pointer (touch, idle): let the glow wander on its own.
        mouse.tx = 0.6 + Math.sin(t * 0.21) * 0.25;
        mouse.ty = 0.5 + Math.cos(t * 0.17) * 0.22;
      }
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      intro = Math.min(1, intro + 0.008);
      gl.uniform1f(uTime, reduced ? 12 : t + 12);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uIntro, intro);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced && visible) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(([entry]) => {
      const next = entry.isIntersecting && !document.hidden;
      if (next && !visible && !reduced) raf = requestAnimationFrame(draw);
      visible = next;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
