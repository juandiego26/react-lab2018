import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {

  state = {
    modalVisible: false, // inicamos el estado del modal para que se muestre al inicio
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false // seteamos el estado del modal
    })
  }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Related
            myPlaylist={this.props.extras.myPlaylist}
            friends={this.props.extras.myFriends}
          />
          <Categories
            categories={this.props.data.categories}
            myUserInfo={this.props.extras.myUserInfo}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible && // operador ternario para ver si se rederiza el modal
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
