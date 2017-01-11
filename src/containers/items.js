import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DisplayObjectContainer } from 'react-pixi';
import Item from '../components/item'


class Items extends Component {

    renderItems() {
        return this.props.items.map(item => {
            return <Item key={item.key} x={item.x} y={item.y} />
        })
    }

    render() {
        return (
            <DisplayObjectContainer>
                {this.renderItems()}
            </DisplayObjectContainer>
        )
    }
}

function mapStateToProps(state) {
    return { items: state.items }
}

export default connect(mapStateToProps)(Items)