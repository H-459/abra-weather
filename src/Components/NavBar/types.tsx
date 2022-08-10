export interface NavBarItem {
    id: string;
    text: string;
    active?: JSX.Element;
    inactive?: JSX.Element;
}
export interface NavBarProps {
    items: NavBarItem[];
};