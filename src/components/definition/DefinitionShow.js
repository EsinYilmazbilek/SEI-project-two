import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import DefinitionCard from './DefinitionCard'


function DefinitionShow() {
  const { userWord } = useParams()
  const [words] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      console.log(res.data)
    }
    getData()
  }, [userWord])


  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            Definition Page <span>📔</span>
          </h1>
          {words &&
            words.map(word => (
              <DefinitionCard
                key={word.name}
                name={word.name}
                phonetic={word.phonetic}
                origin={word.origin}
              />
            ))}
        </div>
      </div>
    </section>
  )

}

export default DefinitionShow