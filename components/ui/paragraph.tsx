import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLProps<HTMLParagraphElement> { }

export default function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      {...props}
      className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  )
}