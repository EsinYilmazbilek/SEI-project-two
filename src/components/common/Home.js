import React from 'react'
import { useHistory } from 'react-router'


function Home() {
  const history = useHistory()
  const [userWord, setUserWord] = React.useState('')
  const randomWords = require('random-words')

  const handleSubmit = (e) => {
    e.preventDefault() 
    userWord.toLowerCase()
    history.push(`/${userWord.toLowerCase()}`)
  }

  const handleChange = (e) => {
    setUserWord(e.target.value )
  }

  const handleRandomWord = (e) => {
    e.preventDefault()
    history.push(`/${randomWords()}`)
  }
  
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="container is-max-desktop">
        <div className="hero-body has-text-centered">
          <div className="container is-centered">

            <div className="container">

              <h1 className="title is-1 has-text-centered">
            English Dictionary
              </h1>
            
              {/* <form onSubmit={handleSubmit}>
              <input
                className="input is-primary"
                type="text"
                onChange={handleChange}
                placeholder="Enter word here"
              />
              <button type="submit" className="button is-primary is-hovered" onSubmit={handleSubmit}>Define</button>
            </form> */}

              <div className="level">
                <form className="level" onSubmit={handleSubmit}>
                  <input
                    className="input is-primary level-item"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter word here"
                  />
                  <div className="level-right">
                    <button type="submit" className="button is-primary level-item define" onSubmit={handleSubmit}>Define</button>
                  </div>
                </form>
              </div>
              <div className="box-has-text-centered">
                <button className="button is-primary" onClick={handleRandomWord}>Random Word Generator</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
