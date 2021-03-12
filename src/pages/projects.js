import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import algo from "../images/algo-view.jpg"

const ProjectsPage = () => {
  const projects = [
    {
      title: "Game of Life",
      image: "https://pi.math.cornell.edu/~lipa/mec/banner.png",
      alt: "View of cellular automata simulation.",
      description:
        "An implementation of John Conway's infamous Game of Life. Built using React, and Styled Components.",
      tech: ["JavaScript", "React", "Styled Components"],
      repo: "https://github.com/tylerbroadway/game-of-life",
      demo: "https://conways-game-of-life-tb.netlify.app/",
    },
    {
      title: "Post It Here API",
      image:
        "https://pbs.twimg.com/profile_images/1333471260483801089/OtTAJXEZ_400x400.jpg",
      alt: "Reddit logo",
      description:
        "An API that makes requests to an external API for recommendations as to which sub-reddit to post in.",
      tech: ["Node.js", "Express.js", "Knex.js", "PostgreSQL"],
      repo: "https://github.com/Post-It-Here/backend",
      demo: "",
    },
    {
      title: "AlgoView",
      image: algo,
      alt: "Unsorted elements in a list.",
      description:
        "An app that allows a user to visualize various sorting algorithms. Built in React, and Styled Components.",
      tech: ["JavaScript", "React", "Styled Components"],
      repo: "https://github.com/tylerbroadway/algo-view",
      demo: "https://algo-view.netlify.app/",
    },
  ]

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container flex flex-col">
        <h1 className="mt-2 text-offWhite text-3xl justify-center self-center font-light">
          Recent Projects
        </h1>
        <div className="flex flex-row flex-wrap content-center mt-8 mx-auto justify-end">
          {projects.map(project => (
            <Project
              title={project.title}
              image={project.image}
              alt={project.alt}
              description={project.description}
              tech={project.tech}
              repo={project.repo}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
