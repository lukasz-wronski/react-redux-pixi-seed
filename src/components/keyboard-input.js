import React, { Component } from 'react'

class KeyboardInputComponent extends Component {
    
    onKeyDown(event) {
        const action = this.props[event.key.charAt(0).toLowerCase() + event.key.slice(1)]
        if(action) {
            action()
            event.preventDefault()
        }
    }

    constructor(props) {
        super(props)
        window.addEventListener('keydown', e => this.onKeyDown(e), false);
        window.focus()
    }

    render() {
        return <div></div>
    }
}

export default KeyboardInputComponent