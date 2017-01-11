import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/main'
import * as actions from '../actions'

class App extends Component {

    handleAnimationFrame(time) {
        let delta = time - this.lastFrameTime
        this.props.actions.handleFrame(delta)
        this.lastFrameTime = time
        requestAnimationFrame(time => this.handleAnimationFrame(time))
    }

    spawnItem() {
        this.props.actions.spawnItem()
    }

    constructor(props) {
        super(props)
        requestAnimationFrame(time => this.handleAnimationFrame(time))
        setInterval(() => this.spawnItem(), 1000)
        this.lastFrameTime = 0
    }

    render() {
        return <Main actions={this.props.actions} score={this.props.score} />;
    }
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
