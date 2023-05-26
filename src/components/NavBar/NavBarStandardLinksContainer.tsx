import { ReactNode } from "react";

interface INavBarStandardLinksContainer {
    children?: ReactNode | ReactNode[];
}

export const NavBarStandardLinksContainer = ({children}: INavBarStandardLinksContainer) => {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {children}
            </div>
        </div>
    );
}