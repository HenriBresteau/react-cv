import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Projects from './Projects';

class ProjectList extends Component {
    state ={
        projects: portfolioData
    }
    render() {
        let {projects} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay"></ul>
                <div className="projects">
                    {
                        projects.map(item => {
                            return (
                                <Projects
                                    item= {item}
                                    key= {item.id}
                                    />
                            )
                        })
                    }
                    
                </div>
            </div>
            
        );
    }
}

export default ProjectList;