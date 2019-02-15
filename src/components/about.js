import React, { Component } from 'react';
import './about.css';

export class About extends Component {
    render() {
        return (

            <div class="about">
                <img class={"about-image"} src={require('./media/profile.jpg')} alt="Jonathan's attractive face" />
                <div class="about-text">
                    <h3>Hi, I’m Jonathan Lampel, a Computer Graphics artist in Seattle. </h3>
                    <p>I’m currently working as a 3d modeling instructor for <a href="https://cgcookie.com" target="blank">CG Cookie</a>. 
                        I'm an occasional intro to UX design professor at <a href='https://www.lwtech.edu/' target='blank'>LWIT</a>, a first place Autodesk CG Student Awards winner, an Eagle Scout, 
                        and have been featured in three issues of 3D Artist magazine. 
                        </p>
                    <p>Outside the studio I’m a big fan of exploring nature, reading, fitness, 
                        and constantly drinking tea.</p>
                </div>  
            </div>
        );
    }
}

export class Quote1 extends Component {
    render() {
        return (
            <div class="quote">
                <p class="quote-text">
                I've used Jonathan's techniques in  Westworld, and an early iteration of Marvel's The Gifted. Every time I'm stuck on some complex particle problem, he's always there to bail me out! He's much more than occasionally helpful :)
                </p>
                <p class="source"><i>~ <a href="https://www.imdb.com/name/nm0448332/">Sean Kennedy</a>, Hollywood VFX Artist</i></p>
            </div>
        );
    }
}

export class Quote2 extends Component {
    render() {
        return (
            <div class="quote">
                <p class="quote-text">
                Jonathan has a real knack for balancing the technical and artistic aspects of a project. His work always demonstrates a strong understanding of the real-world sources of his subject while taking enough artistic liberty to make the work compelling. Plus, he’s just a great dude to be around. 
                </p>
                <p class="source"><i>~ <a href="https://www.linkedin.com/in/jcwilliamson/">Jonathan Williamson</a>, cofounder of CG Cookie and the Blender Market</i></p>
            </div>
        );
    }
}

export class Quote3 extends Component {
    render() {
        return (
            <div class="quote">
                <p class="quote-text">
                    Jonathan's seaplane and bird shots in my Pro Lighting Skies Trailer were easily the most difficult, but he crushed it! Really impressed :) 
                </p>
                <p class="source"><i>~ <a href="https://www.linkedin.com/in/andrew-price-17678911/">Andrew Price</a>, founder of Poliigon and Blender Guru</i></p>
            </div>
        );
    }
}

export class Quote4 extends Component {
    render() {
        return (
            <div class="quote">
                <p class="quote-text">
                    Every piece of work I've commissioned Jonathan to do has far exceeded my expectations. His creative approach and attention to detail is unmatched in my experience, and he's truly skilled at taking an abstract idea and making it a reality. 
                </p>
                <p class="source"><a href="https://www.instagram.com/templeton.tonics/">Chris Templeton</a>, founder of Templeton Tonics</p>
            </div>
        );
    }
}