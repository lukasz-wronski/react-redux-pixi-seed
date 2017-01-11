require('normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { Stage, Text } from 'react-pixi';
import { Point } from 'pixi.js'

import config from 'config'

import Player from '../containers/player'
import Items from '../containers/items'
import KeyboardInput from './keyboard-input'

class AppComponent extends Component {
    render() {
        const { actions } = this.props
        return (
            <div className="index">
                <KeyboardInput
                    arrowLeft={() => { actions.playerMoved('left') }}
                    arrowRight={() => { actions.playerMoved('right') }}
                 />
                <Stage width={config.stage.width} height={config.stage.height}>
                    <Player />
                    <Items />
                    <Text text={'score:' + this.props.score}
                          x={config.stage.width / 2}
                          y={config.stage.height / 2}
                          anchor={new Point(0.5,0)}
                          key="2"/>
                </Stage>
            </div>
        );
    }
}

export default AppComponent;
