import React from "react";

export default function PostBtn({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>;
}
