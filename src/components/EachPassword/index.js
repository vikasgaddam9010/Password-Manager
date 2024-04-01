import './index.css'
const EachPassword = props => {
  const {eachPasswordItem, passDeleteId, isToggled} = props
  const {inputWebsite, inputUsername, inputPasswrod} = eachPasswordItem
  const converted = inputWebsite.toUpperCase()

  const onClickToPassId = () => {
    const {id} = eachPasswordItem
    passDeleteId(id)
  }
  return (
    <li className="li-container">
      <p className="first-digit">{converted[0]}</p>
      <div className="details">
        <p className="mar">{inputWebsite}</p>
        <p className="mar">{inputUsername}</p>
        {isToggled ? (
          <p className="mar">{inputPasswrod}</p>
        ) : (
          <img
            alt="stars"
            className="password-stared-image mar"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button data-testid="delete" className="btn" onClick={onClickToPassId}>
        <img
          className="image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default EachPassword
