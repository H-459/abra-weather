import React from "react";

export type SeverityOptions = "success" | "error";

export interface AlertProps {
  severity: SeverityOptions;
  children?: React.ReactNode; 
  className?: string;
}
