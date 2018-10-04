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

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
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
          <Related />
          <VideoPlayer />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible && // operador ternario para ver si se rederiza el modal
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
              <h1>Esto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
