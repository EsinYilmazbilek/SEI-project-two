import React from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { useParams } from 'react-router'
import { useHistory, useLocation } from 'react-router'
import DefinitionCard from './DefinitionCard'
import { createNotification } from '../common/Notification'


function DefinitionShow() {
  const params = useParams()
  // const location = useLocation()
  useLocation()
  const history = useHistory()
  const [words, setWords] = React.useState(null)
  const [userWord, setUserWord] = React.useState(params.userWord)
  const [isSpellingError, setSpellingIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
        // console.log(res.data[0])
        console.log(res.data)
        setWords(res.data)
      } catch (err) {
        setSpellingIsError(true)
      }
    }
    getData()
  }, [userWord])
  // console.log(hasNoAudio)
  console.log(words)

  const handleReset = () => {
    history.push('/')
  }  
  // console.log(id)

  const [userNewWord, setUserNewWord] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault() 
    userNewWord.toLowerCase()
    if (isSpellingError) {
      createNotification
      setSpellingIsError(false)
    } else {
      setUserWord(userNewWord)
      // history.push('/')
      history.push(`/${userNewWord}`)
    }
  }

  const handleChange = (e) => {
    setUserNewWord(e.target.value)
  }
  // console.log(userWord)


  return (
    <section className="container is-max-desktop is-centered">
      <div className="column-body has-text-centered">
        <div className="container is-centered">

          <div className="section">
            <h1 className="title is-1 has-text-centered">
            English Dictionary
            </h1>
          </div>

          <div className="container">
            <div className="container is-centered">
              <div className="section">
                <form className="level" onSubmit={handleSubmit}>
                  <input
                    className="input is-primary level-item"
                    type="text"
                    onChange={handleChange}
                    placeholder="Search Again"
                  />
                  <div className="level-right">
                    <button className="button is-primary define" type="submit" onSubmit={handleSubmit}>Define</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {isSpellingError && createNotification()}
          {words &&
            words.map(word => (
              <DefinitionCard
                key={uuid()}
                name={word.word}
                phonetic={word.phonetic}
                origin={word.origin}
                element={word.meanings[0].partOfSpeech}
                def={word.meanings[0].definitions.map(definition => definition.definition)}
                audio={word.phonetics[0] ? word.phonetics[0].audio : null}
              />
            ))}
          <div className="section">
            <div className="box-has-text-centered">
              <button className="button is-primary" onClick={handleReset}>Home</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionShow