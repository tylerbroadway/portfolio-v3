import * as React from "react"
// import { Link, StaticImage } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
  const projects = [
    {
      title: "Post It Here API",
      image:
        "https://pbs.twimg.com/profile_images/1333471260483801089/OtTAJXEZ_400x400.jpg",
      alt: "Reddit logo",
      description:
        "I architected and built an API that uses a Machine Learning API to suggest which sub-reddit to post in.",
      tech: ["Node.js", "Express.js", "Knex.js", "PostgreSQL"],
      repo: "https://github.com/Post-It-Here/backend",
      demo: "",
    },
  ]

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container flex flex-col">
        <h1 className="mt-2 text-offWhite text-3xl justify-center self-center">
          Recent Projects
        </h1>
        <div className="w-1/4 flex flex-col justify-center items-center">
          <img
            className="h-52 w-72 my-1 mx-auto border-4 border-obsidian rounded-md"
            src="https://pbs.twimg.com/profile_images/1333471260483801089/OtTAJXEZ_400x400.jpg"
            alt="Reddit logo"
          />
          <div className="flex flex-row flex-wrap justify-start pl-4 my-1">
            <span className="inline-block bg-teal text-obsidian rounded-full m-1 px-2 py-1 text-sm font-semibold mr-2">
              #Node.js
            </span>
            <span className="inline-block bg-teal text-obsidian rounded-full m-1 px-2 py-1 text-sm font-semibold mr-2">
              #Express.js
            </span>
            <span className="inline-block bg-teal text-obsidian rounded-full m-1 px-2 py-1 text-sm font-semibold mr-2">
              #Knex.js
            </span>
            <span className="inline-block bg-teal text-obsidian rounded-full m-1 px-2 py-1 text-sm font-semibold mr-2">
              #PostgreSQL
            </span>
          </div>
          <div className="w-full px-6">
            <h3 className="text-offWhite text-2xl">Post It Here API</h3>
            <p className="mt-1 text-offWhite text-md">
              I architected and built an API that uses a Machine Learning API to
              suggest which sub-reddit to post in.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
