import React from "react";

export default function Strong({ text, fontSize, color, italic, uppercase }) {
  const styles = {
    fontFamily: italic ? "Garamond-BoldItalic" : "Garamond-Bold",
    textDecoration: "underline",
    textDecorationUnderline: "1px solid var(--gold)",
    letterSpacing: "2px",
    textTransform: uppercase === true ? "uppercase" : "none",
    color: color,
    fontSize: fontSize,
  };

  return <strong style={{ ...styles }}>{text}</strong>;
}
