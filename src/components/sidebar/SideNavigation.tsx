import SideNavigationIcon from "./SideNavigationIcon";
import {
  FaUser, BiHistory, BiCategoryAlt, FaHome,
  MdOutlineProductionQuantityLimits, BsFillBasket2Fill
} from "react-icons/all";


const _navlinks = [
  {
    href: '/',
    route: 'Home',
    icon: FaHome
  },
  {
    href: '/categories',
    route: 'Categories',
    icon: BiCategoryAlt
  },
  {
    href: '/products',
    route: 'Products',
    icon: MdOutlineProductionQuantityLimits
  },
  {
    href: '/orders',
    route: 'Orders',
    icon: BsFillBasket2Fill
  },
  {
    href: '/users',
    route: 'Users',
    icon: FaUser
  },
  {
    href: '/history',
    route: 'History',
    icon: BiHistory
  }
]

const SideNavigation = () => {
  return (
    <div className="static top-0  w-20 m-0 mt-2 pt-6 flex flex-col bg-gray-900 text-white shadow-md">
      {
        _navlinks.map((link, i) => {
          return (
            <SideNavigationIcon icon={link.icon} text={link.route} href={link.href} key={i} />
          )
        })
      }
    </div>
  )
}

export default SideNavigation;