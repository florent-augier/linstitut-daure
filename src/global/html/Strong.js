import React from "react";

export default function Strong({
  text,
  fontSize,
  color,
  italic,
  uppercase,
  textDecoration,
}) {
  const styles = {
    fontFamily: italic ? "Garamond-BoldItalic" : "Garamond-Bold",
    textDecoration: textDecoration ? textDecoration : "underline",
    textDecorationUnderline: "1px solid var(--gold)",
    letterSpacing: "2px",
    textTransform: uppercase === true ? "uppercase" : "none",
    color: color,
    fontSize: fontSize,
  };

  return <strong style={{ ...styles }}>{text}</strong>;
}
