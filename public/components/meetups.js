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
      return <Meetup key={meetup.id} source={meetup}/>;
    });

    return <div></div>;

  }
}

export default Meetups;
