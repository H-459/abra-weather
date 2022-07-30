import React from "react";

export type InputTypes = "text" | "password";

export interface InputProps {
  value: string;
  placeholder?: string;
  title?: string;
  error?: string;
  type?: InputTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
