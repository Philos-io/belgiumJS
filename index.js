import React from 'react';

// Components
import Meetups from './components/meetups';
let {
	Component
} = React;


class Shell extends Component{
	render(){
		return <div>
							<Meetups/>
						</div>;
	}
}

React.render(<Shell/>, document.body);
