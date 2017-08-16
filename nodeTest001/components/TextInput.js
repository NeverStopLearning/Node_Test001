import React from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends React.Component {

	constructor(props){
		super(props);
		this.state = {inputText:'testText'};
	}
    
	handleChange(e){
		this.setState({inputText:e.target.value});
//		e.preventDefault();
	}
	
	handleClick(){
		let newInput = this.state.inputText;
		newInput = newInput.substring(0,(newInput.length-1));
		
		this.setState({inputText:newInput});
		console.log(newInput);
		
	}
	
	
	render(){
		
//		console.log(this.state);

		return (
			<div>
				<input
				    type='text' 
					placeholder='Enter text'
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
									
			    />
				 
				<TextDisplay 
					outputText={this.state.inputText}
					onClick={this.handleClick.bind(this)}
				/>
			</div>
				
				
				);
		
	}
}

export default TextInput;