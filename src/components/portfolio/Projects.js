import React, { Component } from 'react';

class Projects extends Component {
    render() {
        let{
            name, languagesIcons, sources, info, picture
        } =this.props.item;
        return (
            <div className="project">
                <div className="icons">
                    { languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}
                </div>
                <h3> {name} </h3>
                        <img src={picture} alt=""/>
                        <span className="infos">
                            <i className="fas fa-plus-circle"></i>
                        </span>
            </div>
            
        );
    }
}

export default Projects;