import React, { Component } from 'react'

//one day we might get these from a redux store or a db
const btnMap = {
  walking: [],
  group: [{name:'Make Friends', icon:''},
          {name: 'Gather The Band', icon: ''},
          {name:'Hats', icon: ''}],
  single: [],
  random: []
}
const Sidebar2 = props => {
  const { selectSidebar, subSelected } = props
  return (
    <div>
      {btnMap[subSelected].map( el => {
        return (
          <button
            type="button"
            key={el.name}
            className="btn btn-raised btn-primary btn-lg"
            onClick={(evt) => selectSidebar(evt, 'Sidebar3', el.name)}>
            <img src={el.icon} className="s2-btn-icon" />
            <p>{el.name}</p>
          </button>
        )
      })}
    </div>
  )
}

export default Sidebar2
