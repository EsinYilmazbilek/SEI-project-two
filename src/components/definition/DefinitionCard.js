import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'

function DefinitionCard({ name, phonetic, origin, def, element, audio, userWord }) {

  const capital = (wordToCapitalize) => wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)

  return (
    <div className="column is-centered">
      <Link to={`/${userWord}`}>
        <div className="card">
          <div className="card-content">
            <h3 className="card-header-title is-centered">You searched for: {capital(name)} ({element})</h3>
          </div>
          <hr />
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
          <div className="card-content">
            <h5><strong>Audio:</strong></h5>
            <ReactAudioPlayer
              src={audio}
              controls
            >
            </ReactAudioPlayer>
          </div>
          <div className="card-content">
            <h5><strong>Phonetic:</strong> {phonetic}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DefinitionCard