export interface SwitchProps {
  id: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  value: boolean;
  onChange: () => void;
}
