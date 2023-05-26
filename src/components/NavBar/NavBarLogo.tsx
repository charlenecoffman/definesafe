import { NavLogo } from "../../models/NavBarTypes";

interface INavBarLogo {
    logo: NavLogo;
}

export const NavBarLogo = ({logo}: INavBarLogo) => {
    return (
        <div className="flex flex-shrink-0 items-center">
            <img
                className="block h-8 w-auto lg:hidden"
                src={logo.url}
                alt={logo.altText}
            />
            <img
                className="hidden h-8 w-auto lg:block"
                src={logo.url}
                alt={logo.altText}
                onClick={() => {if(logo.href){window.location.href=logo.href}}}
            />
        </div>
    );
}