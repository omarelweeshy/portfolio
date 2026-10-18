"use client";
import { useSyncExternalStore } from "react";
import { profile } from "@/lib/content";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const subscribe = (cb: () => void) => {
  const id = window.setInterval(cb, 15_000);
  return () => window.clearInterval(id);
};

export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--",
  );
  return <time suppressHydrationWarning>{time}</time>;
}
