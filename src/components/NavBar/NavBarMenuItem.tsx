import { classNames } from "../../helpers/CSSHelperMethods";
import { NavBarOptionType, NavBarOption } from "../../models/NavBarTypes";
import { NavBarSubMenuContainer } from "./NavBarSubMenuContainer";

interface INavBarMenuItem {
    item: NavBarOption;
}

export const NavBarMenuItem = ({item}: INavBarMenuItem) => {
    return (
        <>
            {item.type === NavBarOptionType.ActionableOnClick && (
                <div
                    className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    onClick={item.optionClicked}
                >
                    {item.label}
                </div>
            )}
            {item.type === NavBarOptionType.StandardLink && (
                <a
                    href={item.href}
                    className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                >
                    {item.label}
                </a>
            )}
            {item.type === NavBarOptionType.HasSubMenu && item.subMenu && (
                <NavBarSubMenuContainer menuItemWithSubMenu={item} />
            )}
        </>
    );
}