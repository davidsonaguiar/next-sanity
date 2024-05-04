interface Props extends React.HTMLProps<HTMLHeadingElement> { }

export default function H3({ className, children, ...props }: Props) {
  return (
    <h3
      {...props}
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
    >
      {children}
    </h3>
  )
}