import React from 'react'
import backArrow from '../icons/back-arrow.png'
import friends from '../icons/friends.png'
import microphone from '../icons/microphone.png'
import hat from '../icons/hat.png'
import puppy from '../icons/puppy.png'
import dino from '../icons/dino.png'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


//one day we might get these from a redux store or a db
const btnMap = {
  walking: [],
  group: [{name:'Make Friends', icon: friends},
          {name: 'Gather The Band', icon: microphone}],
  single: [{name: 'Puppy Play', icon: puppy},
           {name: 'Dinosaur Run', icon: dino},
           {name:'Hats', icon: hat}],
  random: []
}
const Sidebar2 = props => {
  const { selectSidebar, subSelected } = props
  return (
    <div>
      <h4>Story</h4>
      {btnMap[subSelected].map( el => {
        return (
          <button
            type="button"
            key={el.name}
            className="btn btn-raised btn-primary btn-lg s2-btn"
            onClick={(evt) => selectSidebar(evt, 'Sidebar3', el.name)}>
            <img src={el.icon} className="s2-btn-icon" />
            <p className="s2-text">{el.name}</p>
          </button>
        )
      })}
      <button
        type="button"
        className="btn btn-raised btn-primary btn-lg s1-btn"
        onClick={(evt) => selectSidebar(evt, 'Sidebar1', '')}>
        <img src={backArrow} className="s1-btn-icon" />
      </button>
    </div>
  )
}

export default Sidebar2
