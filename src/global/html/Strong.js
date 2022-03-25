import React from "react";

const styles = {
  fontFamily: "Garamond-BoldItalic",
  textDecoration: "underline",
  textDecorationUnderline: "1px solid var(--gold)",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

export default function Strong({ text, fontSize, color }) {
  return (
    <strong style={{ ...styles, fontSize: fontSize, color: color }}>
      {text}
    </strong>
  );
}
