import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", disabled = false, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div
            className={DIR(
              "right-3",
              "left-3",
              "absolute top-1/2 -translate-y-1/2 text-white/70 pointer-events-none "
            )}
          >
            {icon}
          </div>
        )}
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          className={cn(
            icon ? "rtl:pr-9 rtl:pl-4 ltr:pl-9 ltr:pr-4" : "px-4",
            "py-[6px] m-1 invalid:border-red-600 rounded-lg transition-all relative mx-1 border-2 border-white/30 w-full focus:border-[var(--m)] focus:shadow-[0_0_5px_var(--m)] outline-none ",
            disabled ? "border-white/10 opacity-50" : "",
            className
          )}
        />
      </div>
    );
  }
);
