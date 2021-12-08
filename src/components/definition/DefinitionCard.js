import ReactAudioPlayer from 'react-audio-player'
import React from 'react'


function DefinitionCard({ name, phonetic, origin, def, element, audio }) {

  const capital = (wordToCapitalize) => wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)

  

  return (
    <div className="container is-max-desktop">
      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title is-centered is-turquoise">You searched for: {capital(name)} ({element})</h3>
        </div>
        <div className="card-content">
          <h5><strong>Definitions: </strong></h5>
          {def.map(eachDef => {
            console.log(eachDef)
            return (
              <p key={eachDef}>{capital(eachDef)}</p>
            )
          })}
        </div>
        <div className="card-content">
          <h5><strong>Origin: </strong>{capital(origin)}</h5>
        </div>
        {audio && <div className="card-content">
          <h5><strong>Audio:</strong></h5>
          <ReactAudioPlayer
            src={audio}
            controls
          >
          </ReactAudioPlayer>
        </div>}
        {phonetic && <div className="card-content">
          <h5><strong>Phonetic: </strong> {phonetic}</h5>
        </div>}
      </div>
    </div>
  )
}

export default DefinitionCard