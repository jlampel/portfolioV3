import React from 'react';
import './modal.css';
import { projects } from './gallery';

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.project = this.props.project;
        this.state = {display: isModal};
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({display: true});

    }
    closeModal() {
        this.setState({display: false});
    }
    render() {
        if (this.state.display) {
            return (
                <div class="modal">
                    <div class="modal-body">
                        <div class="modal-header">
                            <h2 class="modal-title">{projects[this.project].title}</h2>
                            <button onClick={this.closeModal} type="button" class="close">&times;</button>
                        </div>
                        <p>{projects[this.project].text}</p>
                        <img src={projects[this.project].src[0]} alt={projects[this.project].title}/>
                        <img src={projects[this.project].src[1]} alt={projects[this.project].title}/>
                        <img src={projects[this.project].src[2]} alt={projects[this.project].title}/>
                        <img src={projects[this.project].src[2]} alt={projects[this.project].title}/>
                    </div>
                </div>
            );
        } else {
            return ( null );
        }
    }
}