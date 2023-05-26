import { ReactNode } from 'react'

interface INavBarContainerFormat {
    children?: ReactNode | ReactNode[]
}

export const NavBarContainerFormat = ({children}: INavBarContainerFormat) => {
    return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
            {children}
        </div>
    </div>
    );
}