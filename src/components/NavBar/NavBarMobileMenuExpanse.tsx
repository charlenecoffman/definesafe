import { Disclosure } from "@headlessui/react";
import { classNames } from "../../helpers/CSSHelperMethods";
import { NavBarOption } from "../../models/NavBarTypes";

interface INavBarMobileMenuExpanse {
    options: NavBarOption[],
}

export const NavBarMobileMenuExpanse = ({options}: INavBarMobileMenuExpanse) => {
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            {options.map((item) => (
                <Disclosure.Button
                    key={item.id + "_mobileMenu_links"}
                    as="a"
                    href={item.href}
                    className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                >
                    {item.label}
                </Disclosure.Button>
            ))}
            </div>
        </Disclosure.Panel>
    );
}