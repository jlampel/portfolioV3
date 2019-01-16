import React, { Component } from 'react';
import './gallery.css';
import { Modal } from './modal';
import {About} from './about';

export const projects = {
    plants: {
        title: "Forgotten Temple Statue",
        text: 'An outdoor jungle scene created as an example of how to model, texture, and place plants using Blender.',
        src: [require('./media/Plants_feature.png'), require('./media/Plants_clay.png')
        ]
    },
    bulldozer: {
        title: 'Building Something New',
        text: 'Every season the Blender Market has a sale, and my task is to create a render using only Market assets. This one was black Friday / cyber Monday 2018, with the theme of being constructive!',
        src: [require('./media/bulldozer.jpg'), require('./media/bulldozer_clay.jpg')],
    },
    soldier: {
        title: "Tomorrow's Enforcer",
        text: 'A sci-fi soldier in action, created for 3D Artist Magazine issue 96.',
        src: [require('./media/SciFiSoldier.jpg'), require('./media/soldier_rigged.jpg'), require('./media/soldier_turnaround.jpg'), require('./media/soldier_wires.jpg')],
    },
    cabin: {
        title: "Cabin in the Woods",
        text: 'An environment created for a photorealism contest, inspired by adventures in the Pacific Northwest. This image was later used as a book cover for the mystery novel Harlen McFadden.',
        src: [require('./media/cabin.jpg')],
    },
    feast: {
        title: "King of the Feast",
        text: 'This render was created for the Blender Market spring sale 2018 event, and is composed of only market products. Since the modeling and texturing was provided, my focus was on lighting, composition, and storytelling.',
        src: [require('./media/market.jpg'), require('./media/market_square.jpg')],
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
        src: [require('./media/revolver.jpg'), "https://sketchfab.com/models/78e398909703453e9c8b1f990493e00a/embed?"],
    },
    rocketLauncher: {
        title: "Sci-Fi FPS Rocket Launcher",
        text: '',
        src: [require('./media/rocket_launcher.jpg')],
    },
    sniper: {
        title: "Transforming Sci-Fi FPS Sniper Rifle",
        text: '',
        src: [require('./media/sniper.jpg'), "https://sketchfab.com/models/821c903965374b9bbda49a86b347debc/embed?"],
    },
    coffee: {
        title: "Coffee Time",
        text: '',
        src: [require('./media/coffee.jpg')],
    },
    tanks: {
        title: 'Mini Tanks for a Mobile Game',
        text: "These tanks were created for the CG Cookie mini game Tank Ball. Modeled in Blender and textured in Substance Painter. At just over 1,300 triangles, it will run smoothly on any game platform - even VR! The PBR textures are 1K to keep memory low, and the albedo textures can safely be used with a mobile shader as well. The gears and treads are also animated via driven UV's.",
        src: [require('./media/tanks.jpg'), require('./media/tank_topology.jpg'), "https://sketchfab.com/models/f42ae02f2ea84099ac6d03020c1794e5/embed?"],
    },
    gyrocopter : {
        title: 'Sci-fi Gyrocopter',
        text: "This game-ready two person transport is the perfect vehicle for any sci-fi environment. At just over 44k triangles and textured at 4k resolution, it strikes the balance between detail and performance. This project is a retopologized and retextured update to a high poly model by Jonathan Williamson, concepted by David Revoy. ",
        src: [require('./media/gyrocopter.jpg'), "https://sketchfab.com/models/34a72c75fe4745d2bbaa1784ef8e243d/embed?"]
    }
}

class ProjectImage extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.state = {
            src: projects[this.props.src].src[0],
            content: projects[this.props.src],
        }
    }
    openModal() {
        this.props.changeProject(this.state.content);
        this.props.toggleModal();
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

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.changeProject = this.changeProject.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    changeProject(project) {
        this.props.changeProject(project);
    }
    toggleModal() {
        this.props.toggleModal();
    }
    render() {
        return (
            <div class="gallery">
                <ProjectImage class="large" src='plants'changeProject={this.changeProject} toggleModal={this.toggleModal}/>
                <ProjectImage src='bulldozer'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='soldier'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <About />
                <ProjectImage src='cabin'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage class="large"src='feast'changeProject={this.changeProject} toggleModal={this.toggleModal}/>  
                <ProjectImage src='vonnbots'changeProject={this.changeProject} toggleModal={this.toggleModal}/>
                <ProjectImage class="tall"src='dragon'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='snowman'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='readingRoom'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='revolver'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='rocketLauncher'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='sniper'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='coffee'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='tanks'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <ProjectImage src='gyrocopter'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
            </div>
        );
    }
}