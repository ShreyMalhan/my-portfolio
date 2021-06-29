import React, { Component } from 'react';
import profilePic from './male.png'

class Card extends Component {

    constructor() {
        super();

        this.mouseMove = this.mouseMove.bind('this');
        this.mouseEnter = this.mouseEnter.bind('this');
        this.mouseLeave = this.mouseLeave.bind('this');
        this.mouseEnterButton = this.mouseEnterButton.bind('this');
    }

    mouseMove(e) {

        let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        let yAxis = -(window.innerHeight / 2 - e.pageY) / 30;
        e.currentTarget.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    mouseEnter(e) {
        e.currentTarget.style.transform = "translateZ(150px)";
    }

    mouseLeave(e) {
        e.currentTarget.style.transform = `translateZ(0px)`;
    }

    mouseEnterButton(e){
        e.currentTarget.style.transform = "translateZ(80px)";
    }

    render() {
        return (
            <>
                <div className="container-body">
                    <div
                        onMouseMove={this.mouseMove}

                        onMouseEnter={
                            (e) => {
                                e.currentTarget.style.transition = `all 0.2s ease`;
                            }
                        }

                        onMouseLeave={
                            (e) => {
                                e.currentTarget.style.transition = `all 0.5s ease`;
                                e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
                            }
                        }
                        className="container">

                        <div className="card">
                            <div className="photo">
                                <div className="circle"></div>
                                <img
                                    onMouseEnter={this.mouseEnter}
                                    onMouseLeave={this.mouseLeave}
                                    src={profilePic} alt="My profile"
                                />
                            </div>
                            <div className="info">
                                <h1
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateZ(150px) translateY(20px)";
                                    }}
                                    onMouseLeave={this.mouseLeave}
                                    className="name">
                                    Shrey Malhan
                                </h1>
                                <h3
                                    onMouseEnter={this.mouseEnter}
                                    onMouseLeave={this.mouseLeave}
                                >Full Stack Developer</h3>
                                <div
                                    className="skills">
                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >Java</button>

                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >C/C++</button>

                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >JS</button>
                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >React</button>
                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >SQL</button>
                                    <button onMouseEnter={this.mouseEnterButton}
                                    onMouseLeave={this.mouseLeave}
                                    >Python</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }


}

export default Card;