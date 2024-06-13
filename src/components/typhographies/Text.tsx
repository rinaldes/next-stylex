import stylex from "@stylexjs/stylex";
import { ChildType } from "@/types";
import { body, fontWeight, textColor, textAlign } from "@/styles/text.stylex";

interface TextType {
  size: "xxs" | "xs" | "sm" | "md";
  type?: "p" | "span";
  weight?: "normal" | "bold";
  color?: string;
  align?: "left" | "center" | "right";
}

const Text = ({
  children,
  size,
  type = "p",
  weight = "normal",
  color = "inherit",
  align = "left",
}: ChildType & TextType) => {
  const TextType = (type || "p") as keyof JSX.IntrinsicElements;
  return (
    <TextType
      {...stylex.props(body[size], fontWeight[weight], textAlign[align])}
    >
      {children}
    </TextType>
  );
};

export default Text;
