import React from 'react';

class TextDisplay extends React.Component {


	render(){
		

		return (
				<div>
				 {this.props.outputText}
				 
				 <button onClick={this.props.onClick}>Delete letter</button>
				</div>
				 
				);
	}
}

export default TextDisplay;