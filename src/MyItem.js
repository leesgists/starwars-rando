import React from 'react';

class Item extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100
        }
    }

    clickHandler(){
        this.setState({
            clicks: this.state.clicks +1,
            totalRemaining: this.state.totalRemaining -1
        })
        console.log('clicked on: ', this.props.name, ' ',this.state.clicks, ' times');
    }

    render(){
      return(
        <div>
            <button onClick={()=>this.clickHandler()}>
                {this.props.name} You're a Star
            </button>
            <span>{this.state.clicks} is the number of clicks, remaining: {this.state.totalRemaining}</span>
        </div>
      )
    }
}

export default Item;