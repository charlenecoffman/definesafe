import { Menu } from '@headlessui/react'
import { NavBarMenuTransition } from './NavBarMenuTransition'
import { NavBarSubMenuItem } from './NavBarSubMenuItem'
import { NavBarOption } from '../../models/NavBarTypes'
import { classNames } from '../../helpers/CSSHelperMethods';
import React from 'react';

interface INavBarSubMenuContainer {
    menuItemWithSubMenu: NavBarOption;
}

export const NavBarSubMenuContainer = ({menuItemWithSubMenu}: INavBarSubMenuContainer) => {
    return (
        <Menu as="div" className="relative ml-3">
            <Menu.Button className={classNames("flex rounded-full bg-gray-800 text-sm focus:outline-none", menuItemWithSubMenu.linkImageUrl ? "focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" : "")}>
                <span className="sr-only">Open {menuItemWithSubMenu.label}</span>
                {menuItemWithSubMenu.linkImageUrl && (
                    <img
                    className="h-8 w-8 rounded-full"
                    src={menuItemWithSubMenu.linkImageUrl}
                    alt={menuItemWithSubMenu.id + '_LinkImage'}
                    />
                )}
                {menuItemWithSubMenu.label && (
                    <div
                    className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                    >
                        {menuItemWithSubMenu.label}
                    </div>
                )}
            </Menu.Button>
            <NavBarMenuTransition>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {menuItemWithSubMenu.subMenu && menuItemWithSubMenu.subMenu.map(subMenu =>
                        <React.Fragment key={subMenu.id + "_Submenu_MainMenuItem"}>
                            {subMenu.label && (
                                <NavBarSubMenuItem  
                                key={subMenu.id + "_Submenu_MainMenuItem"} 
                                menuItemType={subMenu.type} 
                                optionClicked={subMenu.optionClicked}
                                label={subMenu.label} 
                                href={subMenu.href} />
                            )}
                        </React.Fragment>
                    )}
                </Menu.Items>
            </NavBarMenuTransition>
        </Menu>
    );
}