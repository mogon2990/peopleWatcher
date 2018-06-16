import React, { Component } from 'react'
import singleWalking from '../icons/walking.png'
import group from '../icons/women.png'
import single from '../icons/standing-up-man-.png'
import question from '../icons/question-sign.png'
// import Button from "@material-ui/core/Button"

const Sidebar1 = props => {
  return (
    <div className='container' style={{maxWidth: '12%', background: 'teal'}}>
      <button type="button" class="btn btn-raised btn-primary btn-lg">
        <img src={singleWalking} /></button>
      <button type="button" class="btn btn-raised btn-primary btn-lg">
        <img src={group} /></button>
      <button type="button" class="btn btn-raised btn-primary btn-lg">
        <img src={single} /></button>
      <button type="button" class="btn btn-raised btn-primary btn-lg">
        <img src={question} /></button>
    </div>
  )
}

export default Sidebar1
