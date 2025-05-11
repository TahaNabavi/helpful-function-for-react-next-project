import { cn } from "@/lib/utils";
import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  onCheck?: (e: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      checked,
      className = "",
      disabled = false,
      loading = false,
      onCheck,
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={cn("inline-flex items-center")}>
        <input
          type="checkbox"
          id={id}
          ref={ref}
          disabled={disabled || loading}
          className="hidden"
          onChange={(e) => onCheck && onCheck(e.currentTarget.checked)}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "relative w-10 h-5 rounded-full transition border border-white/10 group flex items-center cursor-pointer",
            checked && "bg-[var(--c)]",
            disabled && "opacity-50 cursor-not-allowed",
            loading && "opacity-50 cursor-progress",
            className
          )}
        >
          <span
            className={cn(
              "absolute w-3 h-3 rounded-full bg-white/80 transition-all group-active:w-4 group-active:h-2",
              checked ? "right-1" : "left-1",
              loading &&
                "border-[3px] border-dotted animate-spin",
                (loading && checked) ? "border-[var(--c)]" : "border-[var(--card)]"
            )}
          />
        </label>
      </div>
    );
  }
);

Switch.displayName = "Switch";
