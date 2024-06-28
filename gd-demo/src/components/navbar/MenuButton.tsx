import { CloseMenu, OpenMenu } from "../icons";
import { useNavbarContext } from "./NavContext";

export const MenuButton = () => {

  const { setIsOpen, isOpen } = useNavbarContext()

  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        >
        { isOpen ? <OpenMenu /> : <CloseMenu /> }
      </button>
    </div>
  )
}