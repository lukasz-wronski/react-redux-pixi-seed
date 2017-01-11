import React, { Component } from 'react'
import { Sprite } from 'react-pixi'
import bunny from 'images/bunny.png';

class ItemComponent extends Component {

    render() {
        return <Sprite image={bunny} x={this.props.x} y={this.props.y} key="1"/>;
    }
}

export default ItemComponent