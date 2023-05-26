import { ReactNode } from "react"

interface INavBarLeftAligned {
    children?: ReactNode | ReactNode[]
}

export const NavBarLeftAligned = ({children}: INavBarLeftAligned) => {
    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {children}
        </div>
    );
}