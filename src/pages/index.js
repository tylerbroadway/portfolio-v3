import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col w-3/4 mx-12 my-14">
      <h1 className="text-4xl text-offWhite">
        Hey{" "}
        <span role="img" aria-label="Hand wave emoji">
          👋
        </span>{" "}
        I'm Tyler Broadway.
      </h1>
      <p className="my-6 text-3xl text-teal">
        I build cool websites using cool tech.
      </p>
      <p className="my-2 text-xl text-offWhite">
        I'm a software engineer with experience building full-stack
        applications, modern websites and custom REST APIs. I have a passion for
        making websites that are as simple and easy to use as possible, without
        taking away from their functionality.
      </p>
      <p className="my-4 text-xl text-offWhite">
        I specialize in serverless architecture, headless websites and the
        JAMstack. Every application I build is secure, high-performing and easy
        to maintain.
      </p>
      <div className="flex flex-row justify-around items-center mt-8 w-1/3">
        <button className="h-14 w-1/2 rounded bg-teal text-obsidian text-xl">
          View Resumé
        </button>
        <div className="text-teal text-xl">
          <Link to="/projects/">My Work</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
