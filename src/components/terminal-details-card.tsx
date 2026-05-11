"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  Mail,
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
      ? "--:-- -- // GMT+8"
      : `${MANILA_TIME_FORMATTER.format(timestamp)} // GMT+8`;

  const leftDetails = [
    {
      icon: TerminalSquare,
      value: "Linux, infra., automation, IaC, CI/CD",
    },
    {
      icon: BriefcaseBusiness,
      value: "Part-time Linux system administrator",
    },
    {
      icon: Target,
      value: "DevOps / Platform",
    },
    {
      icon: MapPin,
      value: "Philippines",
    },
  ];

  const rightDetails = [
    {
      icon: Clock3,
      value: manilaTime,
    },
    {
      icon: Mail,
      value: "johnghlendealdo@gmail.com",
    },
  ];

  return (
    <div className="terminal-card terminal-detail-grid">
      <div className="terminal-detail-column">
        {leftDetails.map(({ icon: Icon, value }) => (
          <div key={value} className="terminal-detail-item">
            <span className="terminal-detail-icon">
              <Icon aria-hidden className="h-4 w-4" />
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <div className="terminal-detail-column terminal-detail-column-offset">
        {rightDetails.map(({ icon: Icon, value }) => (
          <div key={value} className="terminal-detail-item">
            <span className="terminal-detail-icon">
              <Icon aria-hidden className="h-4 w-4" />
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
