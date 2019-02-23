import React from 'react';
import './footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div >
                <div class="footer">
                    <div class='links'>
                        <a href="https://unsplash.com/@jonlampel" target="blank" class='link'>Unsplash Photography</a>
                        <a href="https://www.artstation.com/jonathanl" target="blank"class='link'>Artstation</a>
                        <a href="https://cgcookie.com/categories/3d/courses?sort_author=606694" target="blank"class='link'>CG Cookie Tutorials</a>
                        <a href="https://www.youtube.com/user/BIenderHD" target="blank"class='link'>BlenderHD Tutorials</a>
                        <a href="https://theorycycle.com/" target="blank"class='link'>Theory Cycle Games</a>
                        <a href="https://github.com/jlampel" target="blank"class='link'>GitHub</a>
                    </div>
                    <p class='date'> &copy; Jonathan Lampel {(new Date().getFullYear())}</p>
                </div>
            </div>
        )
    }
}
