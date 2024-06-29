import { ICategory } from "@/types"
import { home } from "../../../data.json"
import { CategoriesItem } from "."

export const Categories = () => {

    const { categoriesTitle, categories } = home.categoriesData
    
    return(
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold mb-8">{categoriesTitle}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat: ICategory, index: number) => (
                    <CategoriesItem key={index} category={cat.category} icon={cat.icon} color={cat.color} />
                    ))}
                </div>
            </div>
        </section>
    )
}