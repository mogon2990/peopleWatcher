import React, { Component } from 'react'
import walking from '../icons/walking.png'
import group from '../icons/women.png'
import single from '../icons/standing-up-man-.png'
import random from '../icons/question-sign.png'
// import Button from "@material-ui/core/Button"
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const Sidebar1 = props => {
  const { selectSidebar } = props
  return (
    <div>
      <h4>Play Mode</h4>
      <button
        type="button"
        className="btn btn-raised btn-primary btn-lg"
        onClick={(evt) => selectSidebar(evt, 'Sidebar2')}>
        <img src={walking} className="s1-btn-icon" /></button>
      <button
        type="button"
        className="btn btn-raised btn-primary btn-lg"
        onClick={(evt) => selectSidebar(evt, 'Sidebar2', 'group')}>
        <img src={group} className="s1-btn-icon" /></button>
      <button
        type="button"
        className="btn btn-raised btn-primary btn-lg"
        onClick={(evt) => selectSidebar(evt, 'Sidebar2')}>
        <img src={single} className="s1-btn-icon" /></button>
      <button
        type="button"
        className="btn btn-raised btn-primary btn-lg"
        onClick={(evt) => selectSidebar(evt, 'Sidebar2')}>
        <img src={random} className="s1-btn-icon" /></button>
    </div>
  )
}

export default Sidebar1


{/* <img src={props.imageSrc} key={props.imageSrc} /> */}
