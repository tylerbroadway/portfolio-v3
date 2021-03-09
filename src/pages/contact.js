import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="flex items-center justify-center border-2 border-red-500">
        <h1 className="text-offWhite text-3xl">Contact Me</h1>
      </div>
    </Layout>
  )
}

export default ProjectsPage
