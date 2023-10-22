import React from 'react'
// import { a } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">RTK</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="https://stackoverflow.com/questions/60946584/react-use-context-cannot-destructure-property-currentchatbotinedit-of-object" className="nav-link">
                  Create Post
                </a>
              </li>
              <li className="nav-item">
                <a href="https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works" className="nav-link">
                  All Post
                </a>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            //   value={searchData}
            //   onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar