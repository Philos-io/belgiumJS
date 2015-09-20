import React from 'react';

// Create the main component
class Meetup extends React.Component{
  constructor(){
    super();
  }

  componentWillMount(){
    console.log('inside meetup')
  }


  render(){
    return (<div>
      Inside meetup
        </div>);
  }
}


export default Meetup;
