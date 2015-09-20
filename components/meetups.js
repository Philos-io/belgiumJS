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

    return (<div className="ui secondary pointing menu">
              <a className="active item">
                Home
              </a>
              <a className="item">
                Messages
              </a>
              <a className="item">
                Friends
              </a>
              <div className="right menu">
                <a className="ui item">
                  Logout
                </a>
              </div>
            </div>
            <div className="ui segment">
              <p></p>
              </div>);
  }
}


export default Meetups;
