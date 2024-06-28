"use client"

import { createContext, useContext, useState } from "react"
import {navbar} from "../../data.json"
import { IChildren, INavbarContext } from "@/types"

const initialNavbarContext: INavbarContext = {
    isOpen: false,
    setIsOpen: () => {},
    navbar: navbar
}

const NavbarContext = createContext<INavbarContext>( initialNavbarContext )

// hook
export const useNavbarContext = () => useContext( NavbarContext )

export const NavbarProvider = ({children}: IChildren) => {

    const [isOpen, setIsOpen] = useState(false)
    // const [navbar, setNavbar] = useState<INavbar[]>([])

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen, navbar }}>
        { children }
    </NavbarContext.Provider>
  )
}