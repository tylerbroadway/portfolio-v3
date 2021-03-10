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

  const onSubmit = e => {
    console.log(info)

    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="flex flex-col items-center justify-evenly h-full">
        <h1 className="text-offWhite text-3xl font-sans tracking-wide mt-6">
          Contact Me
        </h1>
        <div className="flex justify-center mb-10 items-center h-3/4 w-1/3">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center h-full w-full"
          >
            <input
              className="w-full h-12 my-2 rounded-md px-2 text-obsidian outline-none"
              name="name"
              placeholder="Name"
              value={info.name}
              onChange={onChange}
            />
            <input
              className="w-full h-12 my-2 rounded-md px-2 text-obsidian outline-none"
              name="email"
              placeholder="Email"
              value={info.email}
              onChange={onChange}
            />
            <textarea
              className="w-full h-1/3 my-2 rounded-md px-2 py-2 text-obsidian outline-none"
              name="message"
              placeholder="Message"
              value={info.message}
              onChange={onChange}
            />
            <button
              className="flex justify-center items-center h-14 w-1/3 mt-6 rounded bg-teal text-obsidian text-xl outline-none"
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
