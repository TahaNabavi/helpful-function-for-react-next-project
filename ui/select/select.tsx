import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/react";
  import { IconChevronDown } from "@tabler/icons-react";
  import clsx from "clsx";
  import { ReactNode } from "react";
  
  export default function Select<T>({
    isSelect,
    onSelect,
    getSelected,
    btnClassName,
    menuClassName,
    children,
  }: {
    isSelect: T;
    onSelect: (e: T) => void;
    getSelected: (e: T) => ReactNode;
    btnClassName?: string;
    menuClassName?: string;
    children: ReactNode;
  }) {
    return (
      <>
        <Listbox value={isSelect} onChange={onSelect}>
          <ListboxButton
            className={clsx(
              "relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white cursor-pointer",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              btnClassName
            )}
          >
            {getSelected(isSelect)}
            <IconChevronDown className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--button-width)] rounded-xl border backdrop-blur-lg max-h-[300px] overflow-y-auto border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
              menuClassName
            )}
          >
            {children}
          </ListboxOptions>
        </Listbox>
      </>
    );
  }
  export function SelectItem({
    value,
    children,
  }: {
    value: any;
    children: ReactNode;
  }) {
    return (
      <ListboxOption
        value={value}
        className="group flex items-center cursor-pointer gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10 data-[selected]:bg-[var(--c)]/10"
      >
        {children}
      </ListboxOption>
    );
  }
  