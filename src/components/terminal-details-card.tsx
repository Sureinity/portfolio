"use client";

import { useSyncExternalStore } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Target,
  TerminalSquare,
} from "lucide-react";

const MANILA_TIME_FORMATTER = new Intl.DateTimeFormat("en-PH", {
  timeZone: "Asia/Manila",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function subscribe(onStoreChange: () => void) {
  const intervalId = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(intervalId);
}

function getSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return 0;
}

export function TerminalDetailsCard() {
  const timestamp = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const manilaTime =
    timestamp === 0
      ? "Manila time: --:-- -- // GMT+8"
      : `Manila time: ${MANILA_TIME_FORMATTER.format(timestamp)} // GMT+8`;

  return (
    <div className="terminal-card grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
      <div className="space-y-4">
        <div className="terminal-detail-item">
          <TerminalSquare aria-hidden className="h-4 w-4" />
          <span>Focus: Linux, automation, IaC, CI/CD</span>
        </div>
        <div className="terminal-detail-item">
          <BriefcaseBusiness aria-hidden className="h-4 w-4" />
          <span>Work: Part-time Linux sysadmin</span>
        </div>
        <div className="terminal-detail-item">
          <Target aria-hidden className="h-4 w-4" />
          <span>Track: Junior DevOps / Platform</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="terminal-detail-item">
          <Clock3 aria-hidden className="h-4 w-4" />
          <span>{manilaTime}</span>
        </div>
        <div className="terminal-detail-item">
          <MapPin aria-hidden className="h-4 w-4" />
          <span>Base: Philippines</span>
        </div>
      </div>
    </div>
  );
}
