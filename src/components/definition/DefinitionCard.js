import { Link } from 'react-router-dom'

function DefinitionCard({ word, phonetic, origin, userWord }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/${userWord}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{word}</h3>
          </div>
          <div className="card-content">
            <h5>{phonetic}</h5>
          </div>
          <div className="card-content">
            <h5>{origin}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DefinitionCard