import React, {Component} from 'react';


////Component Definition - Functional
// const SearchBar = () => {
//     return <input />;
// };

//A class component is aware of its state
class SearchBar extends Component{
    constructor(props){
        //calling parent cosntructor method with 'super'
        super (props);

        this.state={term:''};
    }
    render(){
        return (
        <div> 
            <input //controlled item due to its value being set by the state
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value})}/>
        </div>
        );   
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
}

//Making it available to other components to import
export default SearchBar; 