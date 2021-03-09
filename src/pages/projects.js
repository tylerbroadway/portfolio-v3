import * as React from "react"
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
        <div className="w-1/3 flex flex-col justify-center">
          <img
            className="h-52 w-75 ml-4 ring-2 ring-obsidian rounded-md"
            src="https://pbs.twimg.com/profile_images/1333471260483801089/OtTAJXEZ_400x400.jpg"
            alt="Reddit logo"
          />
          <div className="flex flex-row flex-wrap justify-start w-3/4 pl-4 my-1">
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
            <h3 className="text-offWhite text-2xl my-2">Post It Here API</h3>
            <p className="w-75 my-4 text-offWhite text-md">
              I architected and built an API that uses a Machine Learning API to
              suggest which sub-reddit to post in.
            </p>
            <div className="flex flex-row my-2">
              <div
                role="button"
                tabIndex={0}
                aria-pressed="false"
                onClick={() =>
                  window.open("https://github.com/Post-It-Here/backend")
                }
                onKeyDown={e =>
                  window.open("https://github.com/Post-It-Here/backend")
                }
                className="flex justify-center items-center w-1/3 h-8 mr-4 bg-teal text-obsidian rounded"
              >
                View Code
              </div>
              <div
                role="button"
                tabIndex={-1}
                aria-pressed="false"
                onClick={() => console.log("no demo")}
                onKeyDown={e => console.log(e.key)}
                className={`flex justify-center items-center w-1/3 h-8 bg-teal text-obsidian rounded`}
              >
                View Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
