import React from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Page title="Not found">
      <div className="text-center">
        <h2>Oooops!! Page does not exist</h2>
        <p className="lead text-muted">
          Visit the <Link to="/">homepage</Link> for a fresh start
        </p>
      </div>
    </Page>
  )
}

export default NotFound
