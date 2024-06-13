import * as stylex from "@stylexjs/stylex";
import text from "@/configs/text.stylex";

// Fonts Family
const fontTitle = "Lora, serif";
const fontBody = "Lora, serif";

export const heading = stylex.create({
  h1: {
    fontSize: text.h1,
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "0.5em",
    fontFamily: fontTitle,
  },
  h2: {
    fontSize: text.h2,
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "0.5em",
    fontFamily: fontTitle,
  },
  h3: {
    fontSize: text.h3,
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "0.5em",
    fontFamily: fontTitle,
  },
  h4: {
    fontSize: text.h4,
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "0.5em",
    fontFamily: fontTitle,
  },
  h5: {
    fontSize: text.h5,
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "0.5em",
    fontFamily: fontTitle,
  },
});

export const body = stylex.create({
  xxs: {
    fontSize: text.xxs,
    lineHeight: "1.275",
    fontFamily: fontBody,
  },
  xs: {
    fontSize: text.xs,
    lineHeight: "1.275",
    fontFamily: fontBody,
  },
  sm: {
    fontSize: text.sm,
    lineHeight: "1.275",
    fontFamily: fontBody,
  },
  md: {
    fontSize: text.md,
    lineHeight: "1.275",
    fontFamily: fontBody,
  },
});

export const textAlign = stylex.create({
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export const fontWeight = stylex.create({
  normal: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
});

export const textColor = stylex.create({
  primary: {
    color: "var(--color-text-primary)",
  },
  secondary: {
    color: "var(--color-text-secondary)",
  },
});
