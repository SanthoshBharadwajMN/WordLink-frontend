import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  useEffect(() => {
    document.title = "About us | Complex App"
    window.scrollTo(0, 0)
  }, [])

  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">Welcome to WordLink, the premier social media platform for connecting and communicating with people using the power of the written word.</p>
      <p>We believe in the power of language to bring people together, to inspire and to provoke thought. We provide a platform where people can share their thoughts, ideas, and opinions with others in a safe, supportive environment. We understand that sometimes, the best way to express ourselves is through the written word, and we want to provide a space where people can do that freely and without distraction.</p>
      <p>Join our community of like-minded individuals, writers, journalists, and thought-leaders who believe in the power of words. Start sharing your thoughts, ideas, and opinions today and connect with people on a deeper level.</p>
    </Page>
  )
}

export default About
