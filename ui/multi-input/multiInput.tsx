import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect, ReactNode } from "react";

export default function MultiInput<T extends string | number>({
  inputType,
  inputLength,
  sizeLength,
  onChange,
  onComplete,
  className,
  autoFocus,
  renderBetween,
}: {
  inputType: T;
  inputLength: number;
  sizeLength: number;
  onChange?: (e: T) => void;
  onComplete: (e: T) => void;
  className?: string;
  autoFocus?: boolean;
  renderBetween?: {
    type: "odd" | "even" | "all" | number;
    node: ReactNode;
  };
}) {
  const [values, setValues] = useState<string[]>(Array(inputLength).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const validateInput = (value: string): string => {
    if (typeof inputType === "number") {
      return value.replace(/\D/g, ""); // remove non-digits
    }
    return value;
  };

  const handleChange = (index: number, rawValue: string) => {
    const cleanedValue = validateInput(rawValue).slice(0, sizeLength);
    const newValues = [...values];
    newValues[index] = cleanedValue;
    setValues(newValues);

    const combinedValue = newValues.join("") as T;
    onChange?.(combinedValue);

    if (cleanedValue.length === sizeLength && index < inputLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newValues.every((val) => val.length === sizeLength)) {
      onComplete(combinedValue);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    const clean = validateInput(text).slice(0, inputLength * sizeLength);
    const split = clean.match(new RegExp(`.{1,${sizeLength}}`, "g")) || [];

    const newValues = [...values];
    split.forEach((val, i) => {
      if (i < inputLength) newValues[i] = val;
    });
    setValues(newValues);

    const combinedValue = newValues.join("") as T;
    onChange?.(combinedValue);

    if (newValues.every((val) => val.length === sizeLength)) {
      onComplete(combinedValue);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus]);

  return (
    <div className="flex items-center gap-2" dir="ltr">
      {Array.from({ length: inputLength }).map((_, index) => (
        <React.Fragment key={index}>
          <input
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            inputMode={typeof inputType === "number" ? "numeric" : "text"}
            maxLength={sizeLength}
            value={values[index]}
            onKeyDown={(e) => {
              if (typeof inputType === "number") {
                const allowed = [
                  "Backspace",
                  "ArrowLeft",
                  "ArrowRight",
                  "Delete",
                  "Tab",
                ];
                const isNumber = /^[0-9]$/.test(e.key);
                if (!isNumber && !allowed.includes(e.key)) {
                  e.preventDefault();
                }
              }
              handleKeyDown(index, e);
            }}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              const filtered = validateInput(target.value).slice(0, sizeLength);
              if (target.value !== filtered) target.value = filtered;
              handleChange(index, filtered);
            }}
            onPaste={(e) => handlePaste(e)}
            autoComplete="off"
            aria-label={`Input part ${index + 1} of ${inputLength}`}
            className={cn(
              "h-10 text-center border border-white/10 rounded focus:outline-none focus:ring-2 focus:ring-[var(--c)]",
              values[index].length === sizeLength && "ring-2 ring-[var(--c)]",
              className
            )}
          />

          {renderBetween &&
            index < inputLength - 1 &&
            (renderBetween.type === "all" ||
            (renderBetween.type === "odd" && index % 2 === 1) ||
            (renderBetween.type === "even" && index % 2 === 0) ||
            (typeof renderBetween.type === "number" &&
              renderBetween.type === index)
              ? renderBetween.node
              : null)}
        </React.Fragment>
      ))}
    </div>
  );
}
