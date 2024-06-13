import stylex from "@stylexjs/stylex";
import { ChildType } from "@/types";
import { heading, textAlign } from "@/styles/text.stylex";

interface HeadingType {
  size: "h1" | "h2" | "h3" | "h4" | "h5";
  align?: "left" | "center" | "right";
}

const Heading = ({
  children,
  size,
  align = "left",
}: ChildType & HeadingType) => {
  const map: Record<HeadingType["size"], keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
  };
  const Head = map[size];
  return (
    <Head {...stylex.props(heading[size], textAlign[align])}>{children}</Head>
  );
};

export default Heading;
