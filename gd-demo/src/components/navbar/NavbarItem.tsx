import Link from "next/link"

export interface INavbarItem {
    data:{
        page: string
        route: string
    }
}

export const NavbarItem = ({data}: INavbarItem) => {

    const {page, route} = data
  return (
    <Link href={route} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        {page}
    </Link>
  )
}