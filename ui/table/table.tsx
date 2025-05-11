import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Table({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "min-w-full table-auto border-separate border-spacing-0 border-2 border-white/5 rounded-lg shadow-md overflow-hidden",
          className
        )}
      >
        {children}
      </table>
    </div>
  );
}
export function TRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={cn(
        "border-b border-gray-20 dark:border-gray-700 group/trow",
        className
      )}
    >
      {children}
    </tr>
  );
}

export function THeadItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={cn(
        "py-3 px-4 text-left font-semibold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-white/5",
        "rtl:text-right ltr:text-left",
        className
      )}
    >
      {children}
    </th>
  );
}

export function TBodyItem({
  children,
  className,
  col,
}: {
  children: ReactNode;
  className?: string;
  col?: number;
}) {
  return (
    <td
      colSpan={col}
      className={cn(
        "py-3 px-4 text-sm text-gray-700 dark:text-gray-400 group-hover/trow:bg-white/[2%] whitespace-nowrap border-b border-white/5 transition-colors duration-200",
        className
      )}
    >
      {children}
    </td>
  );
}

export function TBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <tbody className={cn("", className)}>{children}</tbody>;
}

export function THead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <thead className={cn("", className)}>{children}</thead>;
}
