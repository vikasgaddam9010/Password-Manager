import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import EachPassword from '../EachPassword'
import './index.css'

class PasswordManger extends Component {
  state = {
    inputWebsite: '',
    inputUsername: '',
    inputPasswrod: '',
    isToggled: false,
    searchInput: '',
    passwordsList: [],
  }

  onSubmitButton = event => {
    const {
      inputWebsite,
      inputUsername,
      inputPasswrod,
      searchInput,
      passwordsList,
    } = this.state
    event.preventDefault()

    const newWebsite = {
      id: uuidv4(),
      inputWebsite,
      inputUsername,
      inputPasswrod,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newWebsite],
    }))
    this.setState({
      inputWebsite: '',
      inputUsername: '',
      searchInput: '',
      inputPasswrod: '',
    })
  }
  passDeleteId = id => {
    const {passwordsList} = this.state
    this.setState({
      passwordsList: passwordsList.filter(eachItem => eachItem.id !== id),
    })
  }
  onClickToToggle = () => {
    this.setState(prevState => ({isToggled: !prevState.isToggled}))
  }

  onChangeSearchInput = event => {
    let inputValue = event.target.value
    this.setState({searchInput: inputValue.toLowerCase()})
  }
  onChangeInputWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }
  onChangeInputUsername = event => {
    this.setState({inputUsername: event.target.value})
  }
  onChangeInputPassword = event => {
    this.setState({inputPasswrod: event.target.value})
  }
  render() {
    const {
      inputWebsite,
      inputUsername,
      isToggled,
      inputPasswrod,
      passwordsList,
      searchInput,
    } = this.state
    let searchedList = passwordsList.filter(each =>
      each.inputWebsite.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          alt="app logo"
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="top-container">
          <div className="add-new-password-container">
            <h1 className="add-new-head">Add New Password</h1>
            <form onSubmit={this.onSubmitButton}>
              <div className="input">
                <div className="img-con">
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  onChange={this.onChangeInputWebsite}
                  value={inputWebsite}
                  type="text"
                  className="input-element-in-fomr"
                  placeHolder="Enter Website"
                />
              </div>
              <div className="input">
                <div className="img-con">
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  onChange={this.onChangeInputUsername}
                  value={inputUsername}
                  type="text"
                  placeHolder="Enter Username"
                  className="input-element-in-fomr"
                />
              </div>
              <div className="input">
                <div className="img-con">
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  onChange={this.onChangeInputPassword}
                  value={inputPasswrod}
                  type="password"
                  placeHolder="Enter Password"
                  className="input-element-in-fomr"
                />
              </div>
              <div className="add-btn-container">
                <button type="submit" className="btn-add">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-manager-image">
            <p></p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="password-container">
            <h1 className="head-your-password">
              Your Passwords{' '}
              <span>
                <p className="count-number">{searchedList.length}</p>
              </span>{' '}
            </h1>
            <div className="input-search">
              <div className="img-con">
                <img
                  className="search-input-img"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
              </div>
              <input
                onChange={this.onChangeSearchInput}
                placeHolder="Search"
                type="search"
                className="input-element-to-search"
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="row-checkbox">
            <input type="checkbox" id="check" onClick={this.onClickToToggle} />
            <label className="check-label" htmlFor="check">
              Show Passwords
            </label>
          </div>
          {searchedList.length === 0 ? (
            <div className="passwords-list-or-no-passwords">
              <img
                className="img-no-password"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="ul-list">
              {searchedList.map(eachPasswordItem => (
                <EachPassword
                  key={eachPasswordItem.id}
                  eachPasswordItem={eachPasswordItem}
                  passDeleteId={this.passDeleteId}
                  isToggled={isToggled}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManger
