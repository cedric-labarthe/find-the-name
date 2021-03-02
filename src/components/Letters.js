import React, { Fragment } from 'react'

// Import de la feuilles de styles
import './Letters.css'

const Letter = (props) => {
  const text = !props.valid
    ? `Mot de ${props.name.length} lettres`
    : `Tu as trouvé le mot ${props.name}`

  return (
    <Fragment>
      <h2>Trouve le nom de ces animaux</h2>
      <p className="display-5">{text}</p>
      <div className="input-group mb-2">
        <input
          className={`userInput ${props.classProps}`}
          type="text"
          required={true}
          onChange={props.checkInput}
          maxLength={props.name.length}
        />
      </div>
    </Fragment>
  )
}

export default Letter
