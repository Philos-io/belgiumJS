import React from 'react';
import './js/material.min.js';
// Components
import Header from './components/header';
import Meetups from './components/meetups';
let {
	Component
} = React;


class Shell extends Component{
	render(){
		return <div>
						<Header/>
						<Meetups/>
		       </div>;
	}
}

React.render(<Shell/>, document.body);
