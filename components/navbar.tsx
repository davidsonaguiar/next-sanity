import Link from "next/link";
import H1 from "./ui/h1";
import Container from "./container";
import ThemeButton from "./theme-button";

interface Props {}

export default function Navbar(props: Readonly<Props>) {
  return (
    <header className="w-full border-b border-border bg-background">
      <Container className="flex justify-between items-center">
        <nav className="w-full mx-auto py-4 px-7 relative flex items-center justify-between">
          <H1>
            <Link href="/">
              Davidson<span className="text-primary">Blog</span>
            </Link>
          </H1>
        </nav>
        <ThemeButton />
      </Container>
    </header>
  );
}