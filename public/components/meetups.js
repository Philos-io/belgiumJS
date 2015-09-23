import React from 'react';
import $ from 'jquery';

// Import components
import Meetup from './meetup';

// Create the main component
class Meetups extends React.Component{

  constructor(){
    super();
    this.state = {
      meetups: []
    };
  }
  componentWillMount(){

  }

  componentDidMount(){
    $.getJSON('http://localhost:9000/meetups', function(meetups){
      this.setState({
        meetups: meetups.results
      });
    }.bind(this));
  }

  render(){
    var meetups = this.state.meetups.map((meetup) =>{
      //debugger
        if (meetup.group_photo) {
            return <Meetup key={meetup.id} source={meetup}/>;
        }
    });

    return (<div className="android-more-section">
              <div className="android-section-title mdl-typography--display-1-color-contrast">JavaScript Meetups</div>
                <div className="android-card-container mdl-grid">
                  {{meetups}}
                </div>
            </div>);
  }
}

export default Meetups;
