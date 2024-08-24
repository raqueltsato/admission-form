import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type Props = {
  label?: string;
  error?: string;
} & InputProps;
