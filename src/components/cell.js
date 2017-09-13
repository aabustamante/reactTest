import React from 'react';

class Cell extends React.Component {

  state = {
    content : "default content"
  };

  constructor(props){
    super(props);
    this.state.content = props.content;
  }

  render = () => {
    return (
      <td>
        <input type="text" onChange={(evt) => this.changeState(evt)} value={this.state.content}/>
      </td>
    )
  }

  changeState = (event) => {
    this.setState({
      content: event.target.value
    });
    console.log(this.state)
  }
}

export default Cell