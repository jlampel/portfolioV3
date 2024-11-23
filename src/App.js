import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Gallery } from './components/gallery';
import { Modal } from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      activeProject: null,
    }
    this.changeProject = this.changeProject.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  changeProject(project) {
    this.setState({ activeProject: project });
  }
  toggleModal() {
    if (this.state.isModal) {
      this.setState({ isModal: false });
      enableBodyScroll(document.querySelector('modal'));
    } else {
      disableBodyScroll(document.querySelector('modal'));
      this.setState({ isModal: true });
    }
  }
  render() {
    if (this.state.isModal) {
      return (
        <div className="App" id='app'>
          <Header />
          <Modal id='modal'
            activeProject={this.state.activeProject}
            toggleModal={this.toggleModal}
            changeProject={this.changeProject}
          />
          <Gallery
            activeProject={this.state.activeProject}
            changeProject={this.changeProject}
            toggleModal={this.toggleModal}
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App" id='app'>
          <Header />
          <Gallery
            activeProject={this.state.activeProject}
            changeProject={this.changeProject}
            toggleModal={this.toggleModal}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;