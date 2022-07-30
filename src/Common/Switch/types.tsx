export interface SwitchProps {
  /**
   * Providing ID for the switch on the DOM.
   */
  id: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  value: boolean;
  onChange: () => void;
}
