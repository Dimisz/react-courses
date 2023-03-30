import React from 'react';
// import {v4} from 'uuid';
import BoxForm from './BoxForm';

class BoxList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boxes: []
    };

    this.renderBoxes = this.renderBoxes.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
    this.addBox = this.addBox.bind(this);
  }

  addBox(box){
    this.setState((st) => {
      return {boxes: [...st.boxes, box]}
    });
  }

  deleteBox(id){
    const newBoxes = this.state.boxes.filter((box) => box.id !== id)
    this.setState({boxes: [...newBoxes]});
  }

  renderBoxes(){
    console.log(this.state.boxes);
    return(
      this.state.boxes.map((box) => {
        return(
           <div key={box.id}>
             <div style={{width: `${box.width}em`, height: `${box.height}em`, backgroundColor: box.backgroundColor}}></div>
             <button onClick={() => this.deleteBox(box.id)}>Delete box</button>
           </div>
        );
      })
    )
  }
  render(){
    return(
      <div>
        <h1>Box Maker</h1>
        {this.renderBoxes()}
        <BoxForm handleSubmit={this.addBox} />
      </div>
    );
  }
}

export default BoxList;