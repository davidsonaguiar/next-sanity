import { twMerge } from "tailwind-merge"

interface Props extends React.HTMLProps<HTMLHeadingElement> { }

export default function H1({ className, children, ...props }: Props) {

  const classDefault = "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"; 
  
  return (
    <h1
      {...props}
      className={twMerge(classDefault, className)}
    >
      {children}
    </h1>
  )
}