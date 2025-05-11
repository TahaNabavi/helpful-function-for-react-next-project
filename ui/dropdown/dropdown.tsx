import { cn } from "@/lib/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { ReactNode } from "react";

export default function Dropdown({
  menuBtnChildren,
  menuBtnClassName,
  menuClassName,
  children,
}: {
  menuBtnChildren?: ReactNode;
  menuBtnClassName?: string;
  menuClassName?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Menu>
        <MenuButton className={cn("", menuBtnClassName)}>
          {menuBtnChildren}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className={cn(
            "w-32 z-[150] backdrop-blur-md origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0",
            menuClassName
          )}
        >
          {children}
        </MenuItems>
      </Menu>
    </>
  );
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const DropdownButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <MenuItem>
        <button
          ref={ref}
          {...props}
          className={cn(
            "group flex w-full my-0.5 items-center justify-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer",
            className
          )}
        >
          {children}
        </button>
      </MenuItem>
    );
  }
);
DropdownButton.displayName = "DropdownButton";