import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLProps<HTMLHeadingElement> { }

export default function H2({ className, children, ...props }: Props) {
  const classDefault = "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0";
  return (
    <h2
      {...props}
      className={twMerge(classDefault, className)}
    >
      {children}
    </h2>
  );
}