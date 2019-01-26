import React, { Component } from 'react';
import './gallery.css';
import LazyLoad from 'react-lazy-load';
import {About} from './about';

export const projects = {
    plants: {
        title: "Forgotten Temple Statue",
        text: 'An outdoor jungle scene created as an example of how to model, texture, and place plants using Blender.',
        src: [require('./media/Plants_feature.jpg'), require('./media/Plants_clay.jpg')
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
        src: [require('./media/cabin.jpg'), require('./media/cabin_clay.jpg'), require('./media/grass_test.jpg')],
    },
    feast: {
        title: "King of the Feast",
        text: 'This render was created for the Blender Market spring sale 2018 event, and is composed of only market products. Since the modeling and texturing was provided, my focus was on lighting, composition, and storytelling.',
        src: [require('./media/market.jpg'), require('./media/market_square.jpg')],
    },
    vonnbots: {
        title: "VonnBots on Vacation",
        text: 'A moment of pure robotic bliss, captured for the CG Cookie 2018 Spring Sale. ',
        src: [require('./media/bots-spring-feature_07.jpg')],
    },
    dragon: {
        title: "Waking the Dragon King",
        text: 'A 3d environments homework assignment, and entry into a "Dreamland" themed competition. I imagine falling asleep and slowly feeling the cool and crisp autumn morning air. I get into the boat to row across an ancient lake that has been undiscovered for centuries... ',
        src: [require('./media/DragonThumbnail.jpg')],
    },
    snowman: {
        title: "Happy Snowman",
        text: 'I set out to create a cute Christmas friend. Modeled and rendered in Blender, with color correction in Photoshop.',
        src: [require('./media/snowman.jpg')],
    },
    readingRoom: {
        title: "The Reading Room",
        text: 'A modern reading room created for a class project on interior environments. ',
        src: [require('./media/reading_room.jpg')],
    },
    revolver: {
        title: "VR Ready Rugged Revolver",
        text: 'This handgun can be used for many purposes, but it was designed with virtual reality and augmented reality specifically in mind. It has just over 4k triangles, a fully functional design, and is ready to be manipulated by in-game physics.',
        src: [require('./media/revolver.jpg'), "https://sketchfab.com/models/78e398909703453e9c8b1f990493e00a/embed?", require('./media/revolver_wires.jpg') ],
    },
    rocketLauncher: {
        title: "Sci-Fi FPS Rocket Launcher",
        text: 'A beast of a rocket launcher built for a first person shooter. The final model is only 5.39K tris and is highly optimized for a first person perspective, from texel density to exaggerated proportions and functional reloading mechanisms. ',
        src: [require('./media/rocket_launcher.jpg'), require('./media/rocket_banner.jpg'), require('./media/rocket.jpg'), require('./media/rocket_low.png')],
    },
    sniper: {
        title: "Transforming Sci-Fi FPS Sniper Rifle",
        text: 'A transforming Rifle to Sniper combo built for a first person shooter. The final model is only 8K tris and is highly optimized for a first person perspective, from texel density to exaggerated proportions.',
        src: [require('./media/sniper.jpg'), require('./media/rifle_high.jpg'), require('./media/rifle-transform.gif'), require('./media/rifle_low.png'), "https://sketchfab.com/models/821c903965374b9bbda49a86b347debc/embed?" ],
    },
    coffee: {
        title: "Coffee Time",
        text: 'A quick scene created for an exercise on cgcookie.com. I figured that any self-respecting CG artist living in or around Seattle should have at least one coffee scene in their portfolio. So here it is! ',
        src: [require('./media/coffee.jpg'), require('./media/coffee_clay.jpg')],
    },
    tanks: {
        title: 'Mini Tanks for a Mobile Game',
        text: "These tanks were created for the CG Cookie mini game Tank Ball. Modeled in Blender and textured in Substance Painter. At just over 1,300 triangles, it will run smoothly on any game platform - even VR! The PBR textures are 1K to keep memory low, and the albedo textures can safely be used with a mobile shader as well. The gears and treads are also animated via driven UV's.",
        src: [require('./media/tanks.jpg'), "https://sketchfab.com/models/f42ae02f2ea84099ac6d03020c1794e5/embed?", require('./media/tank_topology.jpg')],
    },
    gyrocopter : {
        title: 'Sci-fi Gyrocopter',
        text: "This game-ready two person transport is the perfect vehicle for any sci-fi environment. At just over 44k triangles and textured at 4k resolution, it strikes the balance between detail and performance. This project is a retopologized and retextured update to a high poly model by Jonathan Williamson, concepted by David Revoy. ",
        src: [require('./media/gyrocopter.jpg'), "https://sketchfab.com/models/34a72c75fe4745d2bbaa1784ef8e243d/embed?"]
    },
    templetonTonics : {
        title: 'Label Design and Previz for Templeton Tonics Pomade',
        text: 'A collection of Pacific Northwest themed hair products for which I designed all branding, packaging, and product visualization. The labels were created in Illustrator and Photoshop, and the result rendered with Cycles.',
        src: [ require('./media/pomade_compass.jpg'), require('./media/pomade_summit.jpg'), require('./media/pomade_atlas.jpg'), require('./media/atlas_sketch.jpg'), require('./media/logo_notebook.jpg')],
    },
    toyTruck : {
        title: 'Toy Truck',
        text: 'A simple toy truck created for a CG Cookie fundamentals of shading exercise, so students could practice with PBR material creation',
        src: [require('./media/truck.jpg'), require('./media/truck_clay.jpg'),],
    },
    ax : {
        title: 'Stylized Low Poly Ax',
        text: 'A low-poly, hand painted ax for use as a game model. Texture resolution is 512 x 512, and the model has only 210 tris.',
        src: [require('./media/ax.jpg'), require('./media/ax.gif'),]
    },
    mountain : {
        title: 'Summer Mountain',
        text: 'I grew up in the PNW and have a natural love for hiking up the mountains in this evergreen state. I hope this scene brings you a breath of fresh clean air! The mountaine shader is completely procedural.',
        src: [require('./media/mountain.jpg'), require('./media/pine_tree.jpg'), require('./media/mountain_shader.jpg'),],
    },
    freedom : {
        title: 'Freedom?',
        text: 'A steampunk robot cutting his strings.',
        src: [require('./media/freedom.jpg'), require('./media/freedom_clay.jpg'), require('./media/crawling_out.jpg'),]
    },
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
        return (
            <div onClick={this.openModal} class={this.props.class} id="imageContainer" > 
                    <img src={this.state.src} alt={this.state.content.title} class="image"/>
            </div>
        );
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
                <LazyLoad offset='1000'>
                    <ProjectImage src='readingRoom'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
                <ProjectImage class='large' src='rocketLauncher'changeProject={this.changeProject} toggleModal={this.toggleModal}/>

                <ProjectImage class='large' src='mountain'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <LazyLoad offset='1000'>
                    <ProjectImage src='revolver'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
                <LazyLoad offset='1000'>
                    <ProjectImage src='sniper'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
                
                <LazyLoad>
                    <ProjectImage src='coffee'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
                    <ProjectImage class='large' src='tanks'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <LazyLoad>
                    <ProjectImage src='gyrocopter'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>

                <ProjectImage class='large' src='templetonTonics'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                <LazyLoad>
                    <ProjectImage src='ax'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
                <LazyLoad>
                    <ProjectImage src='freedom'changeProject={this.changeProject} toggleModal={this.toggleModal}/> 
                </LazyLoad>
            </div>
        );
    }
}