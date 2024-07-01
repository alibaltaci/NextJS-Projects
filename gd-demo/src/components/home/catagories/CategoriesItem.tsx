import { ICategory } from "@/types"
import Link from "next/link"

export const CategoriesItem = ( { icon, category, color }:ICategory ) => {
  
    return (
      <Link href={`/reviews?category=${category.toLowerCase()}`}>
          <div className={`min-w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 flex items-center justify-center text-center bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg mb-4 `}>
            <div className="flex items-center justify-center">
              <span className="ml-2 text-lg">{category}</span>
              <span className="text-4xl">{icon}</span>
            </div>
          </div>
      </Link>
  )
}