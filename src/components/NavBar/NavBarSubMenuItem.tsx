import { Menu } from "@headlessui/react";
import { classNames } from "../../helpers/CSSHelperMethods";
import { NavBarOptionType } from "../../models/NavBarTypes";


interface INavBarSubMenuItem {
    menuItemType: NavBarOptionType,
    href?: string,
    label?: string,
    optionClicked?: () => Promise<void>
}

export const NavBarSubMenuItem = ({menuItemType, href, label, optionClicked}:INavBarSubMenuItem) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <>
                {menuItemType === NavBarOptionType.StandardLink && (
                    <a
                        href={href}
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                        {label}
                    </a>
                )}
                {menuItemType === NavBarOptionType.ActionableOnClick && (
                    <div
                        style={{cursor: "pointer"}}
                        onClick={optionClicked}
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                        {label}
                    </div>
                )}
            </>
            )}
        </Menu.Item>
        
    );
}