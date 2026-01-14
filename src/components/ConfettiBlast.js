"use client";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ConfettiBlast() {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
}
