import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="md:flex md:flex-row md:items-start md:justify-start md:h-full border-2 border-black">
        <div className="flex flex-col items-start md:w-5/12 mt-10 mb-10 mx-10">
          <h1 className="text-offWhite text-3xl font-sans tracking-wide mt-6 font-light">
            Reach Out!
          </h1>
          <p className="mt-4 text-offWhite text-xl font-light text-left leading-8">
            If you have any questions, or you're looking to hire your next great
            engineer, send a message! I try to respond within 24 hours.
          </p>
        </div>
        <div className="md:my-20 ml-8 h-3/4 md:w-5/12">
          <form
            action="https://formspree.io/f/meqpyaeb"
            method="POST"
            className="flex flex-col justify-center items-start h-full w-full"
          >
            <input
              className="w-3/4 h-12 my-2 rounded-md px-2 text-obsidian outline-none focus:"
              type="text"
              name="name"
              placeholder="Name"
              value={info.name}
              onChange={onChange}
            />
            <input
              className="w-3/4 h-12 my-2 rounded-md px-2 text-obsidian outline-none"
              type="email"
              name="email"
              placeholder="Email"
              value={info.email}
              onChange={onChange}
            />
            <textarea
              className="w-11/12 h-1/3 my-2 rounded-md px-2 py-2 text-obsidian outline-none"
              type="text"
              name="message"
              placeholder="Message"
              value={info.message}
              onChange={onChange}
            />
            <button
              className="flex justify-center items-center h-14 w-1/3 mt-6 mb-6 rounded bg-teal text-obsidian text-xl outline-none tracking-wide transition transform hover:scale-105"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
