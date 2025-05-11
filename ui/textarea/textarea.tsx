import { cn } from "@/lib/utils";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", disabled = false, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div
            className="rtl:right-3 rtl:top-3 ltr:left-3 ltr:top-3 absolute text-white/70 pointer-events-none"
          >
            {icon}
          </div>
        )}
        <textarea
          {...props}
          ref={ref}
          disabled={disabled}
          className={cn(
            icon ? "rtl:pr-9 rtl:pl-4 ltr:pl-9 ltr:pr-4" : "px-4",
            "py-2 m-1 invalid:border-red-600 rounded-lg transition-all relative mx-1 border-2 border-white/30 w-full focus:border-[var(--m)] focus:shadow-[0_0_5px_var(--m)] outline-none",
            disabled ? "border-white/10 opacity-50" : "",
            className
          )}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";