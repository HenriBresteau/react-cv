import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres Compétences</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square">
                        <span>Anglais Courant</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>GitHub</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>SEO</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>Méthodes agiles</span></i></li>
                </ul>
                <ul>
                    <li><i className="fas fa-check-square">
                        <span>Figma</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>Design</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>Photoshop</span></i></li>
                    <li><i className="fas fa-check-square">
                        <span>Montage vidéos</span></i></li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;