import { useNavbarContext } from "./NavContext"
import { NavbarItem } from "./"

export const MobileMenu = () => {

    const { navbar } = useNavbarContext()
  return (
    <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
        {
            navbar.map( (item) => (
                <NavbarItem key={item.id} data={item}  />
            ))
        }
        </div>
    </div>
  )
}