"use client";
import { useWavesurfer } from "@wavesurfer/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { WaveSurferOptions } from "wavesurfer.js";

export default function AudioPlayer({
  url,
  wave = {
    waveColor: "#077a7d",
    height: 32,
    barWidth: 2,
    barGap: 2,
  },
  btns = {
    cloud: true,
    download: true,
  },
  className,
}: {
  url: string;
  btns?: {
    cloud: boolean;
    download: boolean;
  };
  className?: string;
  wave?: Partial<WaveSurferOptions>;
}) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url,
    ...wave,
  });

  const onPlayPause = () => {
    wavesurfer?.playPause();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Access the total duration once wavesurfer is ready
  const duration = wavesurfer?.getDuration();

  return (
    <div
      className={cn(
        "bg-white/5 p-2 rounded-lg flex flex-col gap-1 items-center",
        className
      )}
    >
      <div className="flex w-full  gap-0.5">
        <div className="text-lg px-4 mid text-white/70">
          {isReady && duration && formatTime(duration)}
        </div>

        <div className="flex-grow bg-neutral-950/30 rounded-md p-1">
          <div ref={containerRef} />
        </div>
        <button
          onClick={onPlayPause}
          className="bg-white/[2%] hover:bg-white/[4%] active:scale-[0.95] transition-all border-2 border-white/5 mid w-10 h-[42px] rounded-md cursor-pointer"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
