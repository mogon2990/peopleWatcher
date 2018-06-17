import React, { Component } from 'react'
import Sidebar1 from './Sidebar1'
import Sidebar2 from './Sidebar2'
import Sidebar3 from './Sidebar3'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class SidebarWrapper extends Component {
  constructor() {
    super()
    this.state = {
      selected: 'Sidebar1',
      subSelected: ''
    }
    this.selectSidebar = this.selectSidebar.bind(this)
  }

  selectSidebar(evt, whichSidebar, subSelect) {
    evt.preventDefault()
    this.setState({selected: whichSidebar, subSelected: subSelect})
  }

  render() {
    return (
      <div className='container' style={{
        maxWidth: '12%',
        background: 'teal',
        boxShadow: 'inset 10px 0px 10px rgb(0, 153, 153)'}}>
        {this.state.selected === 'Sidebar1' &&
          <Sidebar1
            selectSidebar={this.selectSidebar}
            key={this.state.selected}/>}
        {this.state.selected === 'Sidebar2' &&
          <Sidebar2
            selectSidebar={this.selectSidebar}
            subSelected={this.state.subSelected}
            key={this.state.selected}/>}
        {this.state.selected === 'Sidebar3' &&
          <Sidebar3
            selectSidebar={this.selectSidebar}
            subSelected={this.state.subSelected}
            key={this.state.selected}/>}
      </div>
    )
  }
}
