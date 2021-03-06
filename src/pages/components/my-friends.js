import React from 'react'
import './my-friends.css'
import Friend from './friends'

const MyFriends = props => (
  <div className = "MyFriends">
    <h1 className="MyFriends-title">Playlists de Amigos</h1>
    {
      props.data.map(item => (
        <Friend
          key={item.id}
          {...item}
        />
        )
      )
    }
  </div>
)

export default MyFriends