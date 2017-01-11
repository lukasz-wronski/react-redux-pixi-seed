import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Sprite } from 'react-pixi';

import bunny from 'images/bunny.png';

class Player extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return <Sprite image={bunny} x={this.props.x} y={this.props.y} key="1"/>
    }
}

function mapStateToProps(state) {
    return state.player
}

export default  connect(mapStateToProps)(Player)