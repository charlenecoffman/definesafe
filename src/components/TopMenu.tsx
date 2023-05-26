import { useAuth0 } from "@auth0/auth0-react"
import { NavBar } from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import { NavBarLocation, NavBarOption, NavBarOptionType } from "../models/NavBarTypes";

export const TopMenu = () => {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
    const [navBarOptions, setNavBarOptions] = useState([] as NavBarOption[])
    const USERMENUID = 'userMenu';

    const logo = {
        url: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        altText: 'Go Home',
        href: "/"
    };

    const staticNavBarOptions = [
        { id: 'medications', label: 'Medications', href: '/medications', type: NavBarOptionType.StandardLink, location: NavBarLocation.Left },
        { id: 'currentPlan', label: 'Current Plan', href: '/plan', type: NavBarOptionType.StandardLink, location: NavBarLocation.Left },
    ] as NavBarOption[];

    var userMenu = { 
        id: USERMENUID, 
        linkImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 
        type: NavBarOptionType.HasSubMenu, 
        location: NavBarLocation.Right,
        subMenu: [
            {id: 'settings', label: 'Settings', href: '/settings', type: NavBarOptionType.StandardLink} as NavBarOption,
            {id: 'profile', label: 'Profile', href: '/profile', type: NavBarOptionType.StandardLink} as NavBarOption
        ] as NavBarOption[]
    } as NavBarOption;
  
    useEffect(() => {
        if(!isAuthenticated && userMenu.subMenu?.findIndex(m => m.id === 'signIn') === -1){
            userMenu.subMenu?.push({id: 'signIn', label: 'Sign In', type: NavBarOptionType.ActionableOnClick, optionClicked: () => loginWithRedirect()} as NavBarOption);
        }
        else if(isAuthenticated && userMenu.subMenu?.findIndex(m => m.id === 'signOut') === -1){
            userMenu.subMenu?.push({id: 'signOut', label: 'Sign Out', type: NavBarOptionType.ActionableOnClick, optionClicked: () => logout()} as NavBarOption);
        }

        setNavBarOptions([...staticNavBarOptions, userMenu]);
    // eslint-disable-next-line
    }, [isAuthenticated]);

    const navBarProps = {
        options: navBarOptions,
        logo: logo
    };

    return (
        <>
            <NavBar {...navBarProps}/>
        </>
    )
}