import * as React from "react"

const Project = props => {
  const { title, image, alt, repo, demo, tech, description } = props

  return (
    <div className="w-1/3 flex flex-col justify-center">
      <img
        className="h-52 w-75 ml-4 ring-2 ring-obsidian rounded-md"
        src={image}
        alt={alt}
      />
      <div className="flex flex-row flex-wrap justify-start w-3/4 pl-4 my-1">
        {tech.map(t => (
          <span className="inline-block bg-teal text-obsidian rounded-full m-1 px-2 py-1 text-sm font-semibold mr-2">
            #{t}
          </span>
        ))}
      </div>
      <div className="w-full px-6">
        <h3 className="text-offWhite text-2xl my-2">{title}</h3>
        <p className="w-75 my-4 text-offWhite text-md">{description}</p>
        <div className="flex flex-row my-2">
          <div
            role="button"
            tabIndex={0}
            aria-pressed="false"
            onClick={() => window.open(repo)}
            onKeyDown={e => window.open(repo)}
            className="flex justify-center items-center w-1/3 h-8 mr-4 bg-teal text-obsidian rounded"
          >
            View Code
          </div>
          {demo ? (
            <div
              role="button"
              tabIndex={-1}
              aria-pressed="false"
              onClick={() => window.open(demo)}
              onKeyDown={e => window.open(demo)}
              className={`flex justify-center items-center w-1/3 h-8 bg-teal text-obsidian rounded`}
            >
              View Demo
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Project
