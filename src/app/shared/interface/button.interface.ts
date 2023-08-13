export interface IButtonConfig {
    buttonClass?: string;
    type?: string;
    stroked?: boolean;
    label?: string;
    isLoading?: boolean;
    route?: string;
    isDisabled?: boolean; 
    iconClass?: string;
    icon?: string;
    iconPlacement?: string;               // before or after content
    matIcon?:string;                      // material icon name get from this link https://fonts.google.com/icons?selected:Material+Icons
    iconWrapperClass?: string;
}