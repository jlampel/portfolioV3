import React from 'react';
import './modal.css';

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.activeProject,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.props.toggleModal();
    }
    render() {
        let media = [];
        for (let i = 0; i < this.state.project.src.length; i++) {
            if (this.state.project.src[i].charAt(0) === 'h' ) {
                media.push(
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="3d viewer" width="100%" height="720" src={this.state.project.src[i]} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                        </iframe>
                    </div>
                );
            } else {
                media.push(
                    <img src={this.state.project.src[i]} alt={this.state.project.title} class='modal-image'/>
                );
            }
        }
        return (
            <div class="modal" onClick={this.toggleModal}>
                <div class="modal-body">
                    <div class="modal-header"> 
                        <h2 class="modal-title">{this.state.project.title}</h2>
                        <button onClick={this.toggleModal} type="button" class="close">&times;</button>
                    </div>
                    <p class='description'>{this.state.project.text}</p>
                    <div class="modal-content" onClick='false'>{media}</div>
                </div>
            </div>
        );
    }
}