import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import UserInfo from '../../widgets/components/user-info'


function Categories(props) {
  return (
    <div className="Categories">
      <div className="Categories-header">
        <Search />
        <UserInfo {...props.myUserInfo}/>
      </div>
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
