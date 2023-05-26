import { Disclosure } from '@headlessui/react'
import { NavBarMobileMenuExpanse } from './NavBarMobileMenuExpanse'
import { NavBarContainerFormat } from './NavBarContainerFormat'
import { NavBarMobileMenuButton } from './NavBarMobileMenuButton'
import { NavBarLogo } from './NavBarLogo'
import { NavBarLocation, NavBarOption, NavLogo } from '../../models/NavBarTypes'
import { NavBarMenuItem } from './NavBarMenuItem'
import { NotificationsIconForNavbar } from './NotificationsIconForNavbar'
import { NavBarRightAligned } from './NavBarRightAligned'
import { NavBarLeftAligned } from './NavBarLeftAligned'
import { NavBarStandardLinksContainer } from './NavBarStandardLinksContainer'

interface INavBar {
    options: NavBarOption[],
    logo?: NavLogo,
    includeNotifications?: boolean
}

export const NavBar = ({options, logo, includeNotifications}: INavBar) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <NavBarContainerFormat>
            <NavBarMobileMenuButton isOpen={open} />
            <NavBarLeftAligned>
              {logo && (
                <NavBarLogo logo={logo} />
              )}
              <NavBarStandardLinksContainer>
                {options.filter(o => o.location === NavBarLocation.Left).map((item) => (
                    <NavBarMenuItem
                      key={item.id + "_MainMenu"} 
                      item={item}/>
                ))}
              </NavBarStandardLinksContainer>
            </NavBarLeftAligned>
            <NavBarRightAligned>
              {includeNotifications && (
                  <NotificationsIconForNavbar />
              )}
              <NavBarStandardLinksContainer>
                {options.filter(o => o.location === NavBarLocation.Right).map((item) => (
                    <NavBarMenuItem
                      key={item.id + "_MainMenu"} 
                      item={item}/>
                ))}
              </NavBarStandardLinksContainer>
            </NavBarRightAligned>
          <NavBarMobileMenuExpanse options={options}/>
        </NavBarContainerFormat>
      )}
    </Disclosure>
  )
}
