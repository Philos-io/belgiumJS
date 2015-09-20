import React from 'react';

// Create the main component
class Header extends React.Component{
  constructor(){
    super();
  }

  componentWillMount(){
  }

  render(){
    return (
      <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <img className="android-logo-image" src="images/belgiumjs-logo-32.png"/>
          </span>
          <div className="android-header-spacer mdl-layout-spacer"></div>
          <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
          <div className="android-navigation-container">
            <nav className="android-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Blogs</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Meetups</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Jobs</a>
            </nav>
          </div>
          <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
            <li className="mdl-menu__item">Login</li>
          </ul>
          <span className="android-mobile-title mdl-layout-title">
            <img className="android-logo-image" src="images/belgiumjs-logo-32.png"/>
          </span>
        </div>
      </div>
    );
  }
}


export default Header;
