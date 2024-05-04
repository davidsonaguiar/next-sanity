import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLProps<HTMLElement> { }

export default function Small({ className, children, ...props }: Props) {
  return (
    <small
      {...props}
      className={twMerge("text-sm font-medium leading-none", className)}
    >
      {children}
    </small>
  )
}