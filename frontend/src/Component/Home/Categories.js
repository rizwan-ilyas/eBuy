import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMobileAndroid, faComputer, faCar, faBaseball, faLightbulb, faShirt, faIndustry, faChair } from '@fortawesome/free-solid-svg-icons'

import "./Header.css"

function Categories() {
    return (
        < div className="nav-container" >
            <nav className="featured-category">
                <ul className="nav-row">
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faList} /> All Categories</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faMobileAndroid} /> Smartphones</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faComputer} /> Computer Accessories</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faCar} /> Vehicle</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faBaseball} /> Sports</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faLightbulb} /> Electronic</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faShirt} /> Fashion & Beauty</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faIndustry} /> Industrial</li></Link>
                    <Link to="/"><li className="nav-row-list"><FontAwesomeIcon icon={faChair} /> Furniture</li></Link>
                </ul>
            </nav>
        </div >
    )
}

export default Categories