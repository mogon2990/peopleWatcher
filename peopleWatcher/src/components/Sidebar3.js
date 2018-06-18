import React from 'react'
// import dog from '../characters/runningdog_2.png'
import doggy from '../characters/doggyStill.png'
import backArrow from '../icons/back-arrow.png'

//one day we might get these from a redux store or a db
const charMap = {
  'Puppy Play': [{name: 'doggy1', img: doggy}]
}
const Sidebar3 = props => {
  const { subSelected, selectSidebar, addActiveElement } = props
  return (
    <div>
      <div style={{minHeight: '600px'}}>
        {charMap[subSelected].map( el => {
          return (
            <button
              type="button"
              className="s3-btn"
              key={el.name}
              onClick={(evt) => addActiveElement(evt, el.name)}>
              <img src={el.img} className="s3-btn-img" />
              <p>{el.name}</p>
            </button>
          )
        })}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-raised btn-primary btn-lg s1-btn"
          //currently hardcoded to go back to single !
          onClick={(evt) => selectSidebar(evt, 'Sidebar2', 'single')}>
          <img src={backArrow} className="s1-btn-icon" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar3
