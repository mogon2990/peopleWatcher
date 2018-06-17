import React, { Component } from 'react'
import backArrow from '../icons/back-arrow.png'

//one day we might get these from a redux store or a db
const charMap = {
  'Make Friends': [{name: 'person1', img: ''}, {name:'person2', img: ''}]
}
const Sidebar3 = props => {
  const { subSelected, selectSidebar } = props
  return (
    <div>
      {charMap[subSelected].map( el => {
        return (
          <button
            type="button"
            key={el.name}
            onClick={() => {}}>
            <img src={el.img} className="s3-btn-icon" />
            <p>{el.name}</p>
          </button>
        )
      })}
        <button
          type="button"
          className="btn btn-raised btn-primary btn-lg s1-btn"
          //currently hardcoded to go back to group !
          onClick={(evt) => selectSidebar(evt, 'Sidebar2', 'group')}>
          <img src={backArrow} className="s1-btn-icon" />
      </button>
    </div>
  )
}

export default Sidebar3
