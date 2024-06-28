import { Menu, MenuButton, MobileMenu } from "./"
import { useNavbarContext } from "./NavContext"

export const NavbarContent = () => {

    const { isOpen } = useNavbarContext()

  return (
    <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <MenuButton />
                <Menu />
            </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && <MobileMenu /> }
    </nav>
  )
}
