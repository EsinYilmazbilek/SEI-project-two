import React from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import DefinitionCard from './DefinitionCard'
import { createNotification } from '../common/Notification'


function DefinitionShow() {
  const { userWord } = useParams()
  const history = useHistory()
  const [words, setWords] = React.useState(null)
  const [hasNoAudio, setHasNoAudio] = React.useState(true)
  const id = uuid()
  const [isSpellingError, setSpellingIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
        // console.log(res.data[0])
        if (res.data[0].phonetics.length !== 0) {
          setHasNoAudio(false)
        }
        setWords(res.data)
      } catch (err) {
        setSpellingIsError(true)
      }
    }
    getData()
  }, [userWord])
  console.log(hasNoAudio)


  const handleReset = () => {
    history.push('/')
  }  
  console.log(id)

  const [userNewWord, setUserNewWord] = React.useState('')


  const handleSubmit = (e) => {
    e.preventDefault() 
    userNewWord.toLowerCase()
    isSpellingError ? createNotification
      :
      history.push('/')
    history.push(`/${userWord.toLowerCase()}`)
  }

  const handleChange = (e) => {
    setUserNewWord(e.target.value )
  }
  console.log(userWord)



  return (
    <section className="container is-max-desktop">
      <div className="column-body has-text-centered">
        <div className="column-centered">
          <div>
            <form className="search-again" onSubmit={handleSubmit}>
              <input
                className="input is-primary"
                onBlur={handleChange}
                placeholder="Search Again"
              />
              <button className="button is-primary is-hovered">Define</button>
            </form>
          </div>
          {isSpellingError && createNotification()}
          {words &&
            words.map(word => (
              <DefinitionCard
                key={id}
                name={word.word}
                phonetic={word.phonetic}
                origin={word.origin}
                element={word.meanings[0].partOfSpeech}
                def={word.meanings[0].definitions.map(definition => definition.definition)}
                audio={!hasNoAudio ? word.phonetics[0].audio : 'none'}
              />
            ))}
          <div onClick={handleReset} className="box-has-text-centered">
            <button className="button is-primary is-outlined" onClick={handleReset}>Random Word Of The Day</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionShow