export type ButtonVariants = "primary" | "white" | "ghost" | "link";

export interface ButtonProps {
    variant?: ButtonVariants;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    onClick: () => void;
  }
  