import React, { Component } from 'react';
import './gallery.css';

export const projects = {
    plants: {
        title: "Forgotten Temple Statue",
        text: 'This is a description of the project',
        src: [
            require('./media/Plants_feature.png'), 
            require('./media/Plants_clay.png')
        ]
    },
    bulldozer: {
        title: 'Building Something New',
        text: '',
        src: [require('./media/bulldozer.jpg')],
    },
    soldier: {
        title: "Tomorrow's Enforcer",
        text: '',
        src: [require('./media/SciFiSoldier.jpg')],
    },
    cabin: {
        title: "Cabin in the Woods",
        text: '',
        src: [require('./media/cabin.jpg')],
    },
    feast: {
        title: "King of the Feast",
        text: '',
        src: [require('./media/market.jpg')],
    },
    vonnbots: {
        title: "VonnBots on Vacation",
        text: '',
        src: [require('./media/bots-spring-feature_07.jpg')],
    },
    dragon: {
        title: "Waking the Dragon King",
        text: '',
        src: [require('./media/DragonThumbnail.jpg')],
    },
    snowman: {
        title: "Happy Snowman",
        text: '',
        src: [require('./media/snowman.jpg')],
    },
    readingRoom: {
        title: "The Reading Room",
        text: '',
        src: [require('./media/reading_room.png')],
    },
    revolver: {
        title: "VR Ready Colt Walker Revolver",
        text: '',
        src: [require('./media/revolver.jpg')],
    },
    rocketLauncher: {
        title: "Sci-Fi FPS Rocket Launcher",
        text: '',
        src: [require('./media/rocket_launcher.jpg')],
    },
    sniper: {
        title: "Transforming Sci-Fi FPS Sniper Rifle",
        text: '',
        src: [require('./media/sniper.jpg')],
    },
    coffee: {
        title: "Coffee Time",
        text: '',
        src: [require('./media/coffee.jpg')],
    },
}

class ProjectImage extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            src: projects[this.props.src].src[0],
            content: projects[this.props.src],
            modal: false,
        }
    }
    openModal() {
        this.setState({modal: true});
    }
    closeModal() {
        this.setState({modal: false});
    }
    render() {
        if (!this.state.modal) {
            return (
                <div onClick={this.openModal} class={this.props.class} id="imageContainer" >     
                    <img src={this.state.src} alt={this.state.content.title} class="image"/>
                </div>
            );
        } else {
            return (
                <div class={this.props.class} id="imageContainer" >
                    <img src={this.state.src} alt={this.state.content.title} class="image"/>
                    <Modal project={this.state.content} display={this.state.modal} onClick={this.closeModal}/>   
                </div>
            );
        }
    }
}

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display,
            project: this.props.project,
        };
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({display: false});
    }
    render() {
        if (this.state.display) {
            return (
                <div class="modal" onClick={this.closeModal} >
                    <div class="modal-body">
                        <div class="modal-header"> 
                            <h2 class="modal-title">{this.state.project.title}</h2>
                            <button onClick={this.closeModal} type="button" class="close">&times;</button>
                        </div>
                        <p>{this.state.project.text}</p>
                        <img src={this.state.project.src[0]} alt={this.state.project.title}/>
                        <img src={this.state.project.src[1]} alt={this.state.project.title}/>
                        <img src={this.state.project.src[2]} alt={this.state.project.title}/>
                        <img src={this.state.project.src[2]} alt={this.state.project.title}/>
                    </div>
                </div>
            );
        } else {
            return ( null );
        }
    }
}

class About extends Component {
    render() {
        return (

            <div class="about">
                <img class={"about-image"} src={require('./media/profile.jpg')} alt="Jonathan's attractive face" />
                <div class="about-text">
                    <h3>Hi, I’m Jonathan Lampel, a Computer Graphics artist in Seattle. </h3>
                    <p>I’m currently working as a 3d modeling instructor and designer for <a href="https://cgcookie.com" target="blank">CG Cookie</a>. 
                        I'm an occasional design professor at Lake Washington Institute of Technology, a first place Autodesk CG Student Awards winner, an Eagle Scout, 
                        and have been featured in three issues of 3D Artist magazine. 
                        Results from my tutorials can be seen in <a href="https://youtu.be/exAwxzhBL8w?t=1125" target="blank">Westworld</a>, 
                        Marvel's The Gifted, and more.</p>
                    <p>Outside the studio I’m a big fan of exploring nature, reading, fitness, 
                        and constantly drinking tea.</p>
                </div>  
            </div>
        );
    }
}

export class Gallery extends Component {
    render() {
        return (
            <div class="gallery">
                <ProjectImage class="large" src='plants'/>
                <ProjectImage src='bulldozer'/> 
                <ProjectImage src='soldier'/> 
                <About />
                <ProjectImage src='cabin'/> 
                <ProjectImage class="large"src='feast'/>  
                <ProjectImage src='vonnbots'/>
                <ProjectImage class="tall"src='dragon'/> 
                <ProjectImage src='snowman'/> 
                <ProjectImage src='readingRoom'/> 
                <ProjectImage src='revolver'/> 
                <ProjectImage src='rocketLauncher'/> 
                <ProjectImage src='sniper'/> 
                <ProjectImage src='coffee'/> 
            </div>
        );
    }
}