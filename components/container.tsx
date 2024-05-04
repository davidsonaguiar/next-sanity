import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const classDefault = "w-full max-w-4xl mx-auto p-3 bg-background";
  return(
    <div className={twMerge(classDefault, props.className)}>
      {props.children}
    </div>
  );
}