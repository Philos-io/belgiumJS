import React from 'react';
import $ from 'jquery';
import '../semantic/dist/semantic.css';
import '../semantic/dist/semantic.js';
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

  click(){
    $('.segment').dimmer('show');
  }
  render(){
    var meetups = this.state.meetups.map((meetup) =>{
      return <Meetup key={meetup.id} source={meetup}/>;
    });

    return (<div className="ui segment" style={{height: 800}}>
              <div className="ui dimmer">
              <div className="content">
              <div className="center">
              <h2 className="ui inverted icon header">
              <i className="heart icon"></i>
               BelgiumJS is coming in November
              </h2>
              </div>
              </div>
              </div>
              <div className="ui animated button" tabindex="0">
                <div className="visible content">Next</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </div>
              <button className="ui primary button" onClick={this.click}>
                Save
              </button>
              <button className="ui button" onClick={console.log('clicked')}>
                Discard
              </button>
              <button className="ui button">
                Follow
              </button>
        </div>);
  }
}


export default Meetups;
