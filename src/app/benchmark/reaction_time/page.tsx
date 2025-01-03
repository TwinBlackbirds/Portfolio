'use client';
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {document.title = "TwinBlackbirds | Reaction Time Benchmark"});
  return (
    <div>
      <p>reaction time</p>
    </div>
  )
}