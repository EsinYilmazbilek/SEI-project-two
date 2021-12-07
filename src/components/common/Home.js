import React from 'react'
import { useHistory } from 'react-router'

function Home() {
  const history = useHistory()
  const [userWord, setUserWord] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault() 
    userWord.toLowerCase()
    history.push(`/${userWord.toLowerCase()}`)
  }

  const handleChange = (e) => {
    setUserWord(e.target.value )
  }
  console.log(userWord)

  
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="container is-max-desktop">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title is-1 has-text-centered">
            Dictionary <span>📔</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                className="input is-primary"
                // className="input is-normal"
                type="text"
                onChange={handleChange}
                placeholder="Enter word here"
              />
              <button type="submit" className="button is-primary is-hovered" onSubmit={handleSubmit}>Define</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home