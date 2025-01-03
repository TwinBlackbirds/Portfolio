'use client';
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {document.title = "TwinBlackbirds | WPM Benchmark"});
  return (
    <div>
      <p>wpm</p>
    </div>
  )
}