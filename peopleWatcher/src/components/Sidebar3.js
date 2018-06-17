import React, { Component } from 'react'

//one day we might get these from a redux store or a db
const charMap = {

}
const Sidebar3 = props => {
  const { subSelected } = props
  return (
    <div>
      {btnMap[subSelected].map( el => {
        return (
          <button
            type="button"
            key={el.name}
            onClick={() => {}}>
            <img src={el.icon} className="s3-btn-icon" />
            <p>{el.name}</p>
          </button>
        )
      })}
    </div>
  )
}

export default Sidebar3
