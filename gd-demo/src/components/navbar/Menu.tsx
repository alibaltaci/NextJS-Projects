import { useNavbarContext } from "./NavContext"
import { NavbarItem } from "./"

export const Menu = () => {

    const { navbar } = useNavbarContext()
    
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {
          navbar.map( (item) => (
            <NavbarItem key={item.id} data={item}  />
          ))
        }
      </div>
    </div>
  </div>
  )
}