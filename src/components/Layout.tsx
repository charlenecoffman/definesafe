import { ReactNode } from "react";

interface ILayout {
    children?: ReactNode | ReactNode[]
}

export const Layout = ({children}: ILayout) => {
    return (
        <div className="flex flex-Row">
            <div className="shadow-2xl basis-1/2">
                {children}
            </div>
        </div>
    )
}

//