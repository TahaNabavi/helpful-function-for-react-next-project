
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ReactNode,
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import Portal from "./portal";

export type TooltipPlaceHolders = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: ReactNode;
  children: React.ReactNode;
  placeholder?: TooltipPlaceHolders;
  className?: string;
  offset?:number;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placeholder = "top",
  className,
  offset=4,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: -1, left: -1 });
  const [shouldMeasure, setShouldMeasure] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        setShouldMeasure(true);
      });
    } else {
      setShouldMeasure(false);
    }
  }, [visible]);

  useLayoutEffect(() => {
    if (!shouldMeasure) return;

    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    if (!trigger || !tooltip) return;

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placeholder) {
      case "top":
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "left":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - offset;
        break;
      case "right":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + offset;
        break;
    }

    setPosition({ top, left });
  }, [shouldMeasure, placeholder, content]);

  return (
    <div
      ref={triggerRef}
      className={cn("", className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <Portal>
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed z-[99999] whitespace-nowrap px-3 py-2 text-white bg-[var(--bg-tooltip)] border border-white/10 rounded-md text-sm shadow-lg"
              style={{
                top: position.top,
                left: position.left,
              }}
            >
              {content}
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
