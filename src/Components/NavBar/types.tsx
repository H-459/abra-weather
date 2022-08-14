export interface NavBarItem {
    id: string;
    text: string;
    active?: JSX.Element;
    inactive?: JSX.Element;
}
export interface NavBarProps {
    className?: string;
    items: NavBarItem[];
    selectedItem: string;
    onClick: (id: string) => void;
};