const textAreaStyles = {
    width: 235,
    margin: 5
};

  export default class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
   this.state= {
     userInput:'',
     toDoList:[]
   }
this.handleSubmit= this.handleSubmit.bind(this);
this.handleChange= this.handleChange.bind(this);
}

handleSubmit(){
    const itemsArray=this.state.userInput.split(',');
    this.setState ({
        toDoList:itemsArray
    })
}

handleChange(e) {
    this.setState({
        userInput:e.target.value
    })
}

render(){
    const items = this.state.toDoList.map(i=><li>{i}</li>)
    return (
        <div>
             <textarea 
                 onChange={this.handleChange}
                 value= {this.state.userInput}
                 style={textAreaStyles}
                 placeholder='seperate with commas'
             />
             <button onClick={this.handleSubmit}>Create List </button>
             <ul>
                 {items}
             </ul>

        </div>
    )
}


  }