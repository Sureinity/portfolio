"use client";

import { useEffect, useState } from "react";

const roles = [
  { specialty: "DevOps", suffix: "Engineer" },
  { specialty: "Platform", suffix: "Engineer" },
  { specialty: "Linux", suffix: "SysAdmin" },
];
const SWITCH_INTERVAL_MS = 1600;

export function RoleSwitcher() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, SWITCH_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span className="role-switcher" aria-live="polite">
      <span key={roles[roleIndex].specialty} className="role-switcher-word">
        {roles[roleIndex].specialty}
      </span>
      <span className="role-switcher-static">{roles[roleIndex].suffix}</span>
    </span>
  );
}
