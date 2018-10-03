import React from 'react'
import Playlist from '../../playlist/components/playlist'

function Category(props) {
  return (
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist
        playlist={props.playlist} // las propiedades del json api
      />
    </div>
  )
}

export default Category
