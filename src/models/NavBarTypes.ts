
export enum NavBarOptionType {
    StandardLink = 0,
    ActionableOnClick = 1,
    HasSubMenu = 2
}

export enum NavBarLocation {
    Left = 0,
    Right = 1,
    Center = 2
}

export type NavLogo = {
    url: string,
    href?: string,
    altText?: string
  }
  
export type NavBarOption = {
    id: string,
    type: NavBarOptionType,
    location: NavBarLocation,
    linkImageUrl?: string,
    label?: string,
    href?: string,
    subMenu?: NavBarOption[],
    optionClicked?: () => Promise<void>,
}
  