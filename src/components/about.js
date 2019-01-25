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
                        I'm an occasional UX design professor at <a href='https://www.lwtech.edu/' target='blank'>LWIT</a>, a first place Autodesk CG Student Awards winner, an Eagle Scout, 
                        and have been featured in three issues of 3D Artist magazine. 
                        </p>
                    <p>Outside the studio I’m a big fan of exploring nature, reading, fitness, 
                        and constantly drinking tea.</p>
                </div>  
            </div>
        );
    }
}