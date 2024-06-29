import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode
}

// NAVBAR

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

// HOME PAGE

// Categories

export interface ICategory {
    category: string
    icon: string
    color: string
}

export interface ICategoriesData {
    categoriesTitle: string
    categories: ICategory[]
}

// NEWS

export interface INews {
    title: string;
    imgUrl: string;
    date: string;
    read: string;
    like: string;
    dislike: string;
    editor: string;
    editorImg: string;
    content: string;
    tags: string[];
}

  export interface NewsData {
    pageTitle: string;
    news: INews[];
  }

// REVIEWS

export interface IReview {
    title: string;
    imgUrl: string;
    date: string;
    read: string;
    like: string;
    dislike: string;
    editor: string;
    editorImg: string;
    content: string;
    tags: string[];
}

export interface IReviewsData {
    pageTitle: string;
    reviews: IReview[];
  };