"use client";

import { useEffect, useState } from "react";
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

export function TerminalDetailsCard() {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setTimestamp(Date.now()), 0);
    const intervalId = window.setInterval(() => setTimestamp(Date.now()), 30_000);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  const manilaTime =
    timestamp === 0
      ? "Manila time: --:-- -- // GMT+8"
      : `Manila time: ${MANILA_TIME_FORMATTER.format(timestamp)} // GMT+8`;

  return (
    <div className="terminal-card grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
      <div className="space-y-4">
        <div className="terminal-detail-card">
          <div className="terminal-detail-item">
            <TerminalSquare aria-hidden className="h-4 w-4" />
            <span>Focus: Linux, automation, IaC, CI/CD</span>
          </div>
        </div>
        <div className="terminal-detail-card">
          <div className="terminal-detail-item">
            <BriefcaseBusiness aria-hidden className="h-4 w-4" />
            <span>Work: Part-time Linux sysadmin</span>
          </div>
        </div>
        <div className="terminal-detail-card">
          <div className="terminal-detail-item">
            <Target aria-hidden className="h-4 w-4" />
            <span>Track: Junior DevOps / Platform</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="terminal-detail-card">
          <div className="terminal-detail-item">
            <Clock3 aria-hidden className="h-4 w-4" />
            <span>{manilaTime}</span>
          </div>
        </div>
        <div className="terminal-detail-card">
          <div className="terminal-detail-item">
            <MapPin aria-hidden className="h-4 w-4" />
            <span>Base: Philippines</span>
          </div>
        </div>
      </div>
    </div>
  );
}
