import React from 'react';

// Create the main component
class Meetup extends React.Component{
  constructor(){
    super();
  }

  render(){
    var meetup = this.props.source;

    return (
        <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
          <div className="mdl-card__media">
            <img src={meetup.group_photo.photo_link}/>
          </div>
          <div className="mdl-card__title">
             <h4 className="mdl-card__title-text">{meetup.name}</h4>
          </div>
          <div className="mdl-card__supporting-text">
            <div className="mdl-typography--font-light mdl-typography--subhead" dangerouslySetInnerHTML={{__html: meetup.description}}></div>
          </div>
          <div className="mdl-card__actions">
             <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href={meetup.link}>
              See more
               <i className="material-icons">chevron_right</i>
             </a>
          </div>
      </div>
    );
  }
}


export default Meetup;
