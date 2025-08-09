import { Suspense } from "react"
import ProjectDetails from "./ProjectDetails"


const Page = () => {
  return (
    <Suspense>
      <ProjectDetails />
    </Suspense>
  )
}

export default Page
