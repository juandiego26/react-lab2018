import React from 'react'
import Media from './media.js'
import './playlist.css'

function Playlist(props) {

  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => { // playlist del json
          return <Media handleClick={props.handleOpenModal} {...item} key={item.id}/>
        })
      }
    </div>
  )
}

export default Playlist
