
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'

export default function Button({children,size="md",className}) {
  return (
    <button className={twMerge(clsx("bg-blue-500 text-white border-none",{
      "px-4 py-2 rounded-sm": size=="sm",
      "px-6 py-3 rounded-md": size=="md",
      "px-8 py-4 rounded-lg": size=="lg",
    }),className)}>{children}</button>
  );
}
