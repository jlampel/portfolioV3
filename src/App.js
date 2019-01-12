import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './App.css';
import { Header } from './components/header';
import { Gallery, Modal, projects } from './components/gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      activeProject: null,
    }
    this.changeProject = this.changeProject.bind(this);
  }
  changeProject(project) {
    this.setState({ activeProject: project });
  }
  toggleModal() {
    if (this.state.isModal) {
      this.setState({ isModal: true })
    } else {
      this.setState({ isModal: false })
    }
  }
  render() {
    if (this.state.isModal) {
      return (
        <div className="App" id='app'>
            <Modal project={this.state.activeProject} onClick={this.toggleModal}/>
            <Gallery />
        </div>
      );
    } else {
      return (
        <div className="App" id='app'>
            <Header />
            <Gallery />
        </div>
      );
    }
  }
}

export default App;