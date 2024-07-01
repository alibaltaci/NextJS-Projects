import { Suspense } from "react"
import Loading from "../loading/Loading"
import { IChildren } from "@/types"

const SuspenseComponent = ( {children}:IChildren ) => {
  return (
    <Suspense fallback={ <Loading /> }  >
        { children }
    </Suspense>
  )
}

export default SuspenseComponent