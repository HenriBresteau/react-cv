import React from 'react';

const Hobbies = () => {
    return (
        <div className=" hobbies">
            <h3>Intéret</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running">
                        <span>Course à pied</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking">
                        <span>Randonnées</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling">
                        <span>Permaculture</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin">
                        <span>Crypto-monnaies</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket">
                        <span>Espaces</span>
                    </i>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;