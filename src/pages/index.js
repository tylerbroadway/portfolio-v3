import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const openResume = e => {
    if (typeof window !== "undefined") {
      window.open(
        "https://drive.google.com/file/d/1ywAHWqmNB_VM0jpoJPMWPYe1R7ef8pKZ/view?usp=sharing"
      )
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col h-full w-3/4 mx-12 py-10">
        <h1 className="mt-4 text-4xl text-offWhite font-light">
          Hey{" "}
          <span role="img" aria-label="Hand wave emoji">
            👋
          </span>{" "}
          I'm Tyler Broadway.
        </h1>
        <p className="my-6 text-3xl text-teal font-light">
          I like to build things.
        </p>
        <p className="my-2 text-xl w-3/4 text-offWhite leading-8 font-light">
          I'm a software engineer with experience building full-stack
          applications, modern websites, and custom REST APIs. I have a passion
          for bringing new ideas to life, and solving hard problems.
        </p>
        <p className="my-4 w-3/4 text-xl text-offWhite leading-8 font-light">
          I specialize in serverless architecture, and the JAMstack. I'm
          interested in blockchain, smart contracts, and everything Web3.
        </p>
        <div className="flex flex-row justify-around items-center mt-8 w-1/3">
          <div
            role="button"
            tabIndex={0}
            aria-pressed="false"
            onClick={openResume}
            onKeyDown={openResume}
            className="flex justify-center items-center h-14 w-1/2 rounded bg-teal text-obsidian text-xl transform hover:scale-105  outline-none font-light"
          >
            View Resumé
          </div>
          <div className="text-teal text-xl transition transform hover:scale-110 font-light">
            <Link to="/projects/">My Work</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
