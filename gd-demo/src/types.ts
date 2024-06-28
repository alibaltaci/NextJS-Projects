import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode
}

// navbar

export interface INavbar {
    id:number
    page:string
    route:string
}

export interface INavbarContext {
    isOpen: boolean
    setIsOpen: (isOpen:boolean) => void
    navbar: INavbar[]
}