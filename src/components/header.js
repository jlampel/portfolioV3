import React from 'react';
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="headerBackground"></div>
                <div class="header">
                    <h1 class="title">Jonathan Lampel</h1>
                    <div class="social">
                        <a href="https://www.linkedin.com/in/jonathanlampel/" target="_blank"><i class="fab fa-linkedin-in"></i></a> &nbsp; &nbsp;
                        <a href="https://www.instagram.com/jonlampel/" target="_blank"><i class="fab fa-instagram"></i></a> &nbsp; &nbsp;
                        <a href="https://twitter.com/JonLampel" target="_blank"><i class="fab fa-twitter"></i></a> &nbsp; &nbsp;
                        <a href="mailto:jonathanlampelcg@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
