import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import axios from 'axios'


function DefinitionCard({ name, phonetic, origin, def, element, audio, userWord }) {

  const capital = (wordToCapitalize) => wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)
  console.log(audio)
  
  const [displayAudio, setDisplayAudio] = React.useState(true)
  React.useEffect(() => {
    const showSection = async () => {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      if (res.data[0].phonetics.length !== 0) {
        setDisplayAudio(false)
      }
      console.log(res.data)
      //brings out undefined
    }
    showSection()
  })
  console.log(displayAudio)


  // const [displayPhonetic, setDisplayPhonetic] = React.useState(true)
  // React.useEffect(() => {
  //   const showSection = async () => {
  //     const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
  //     if (res.data[0].phonetics.text) {
  //       console.log(res.data[0].phonetics.text)
  //       setDisplayPhonetic(false)
  //     }
  //     //console.log(res.data.phonetics)
  //     //brings out undefined
  //   }
  //   showSection()
  // })
  // console.log(displayPhonetic)

  

  return (
    <div className="column is-centered">
      <Link to={`/${userWord}`}>
        <div className="card">
          <div className="card-content">
            <h3 className="card-header-title is-centered">You searched for: {capital(name)} ({element})</h3>
          </div>
          <div className="card-content">
            <h5><strong>Definitions:</strong></h5>
            {def.map(eachDef => {
              console.log(eachDef)
              return (
                <p key={def}>{capital(eachDef)}</p>
              )
            })}
          </div>
          <div className="card-content">
            <h5><strong>Origin:</strong>{capital(origin)}</h5>
          </div>
          <div className={`card-content ${(!displayAudio ? 'no-show' : 'inactive')}`}>
            <h5><strong>Audio:</strong></h5>
            <ReactAudioPlayer
              src={audio}
              controls
            >
            </ReactAudioPlayer>
          </div>
          {/* <div className={`card-content ${(!displayPhonetic ? 'no-show' : 'inactive')}`}> */}
          <div className="card-content">
            <h5><strong>Phonetic:</strong> {phonetic}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}
// className={`mood-button ${(isAdmin ? 'no-show' : 'inactive'}`}

export default DefinitionCard