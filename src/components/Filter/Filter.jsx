import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTh, faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';
import "./Filtercss.css"

function Filter({ type }) {
    return (
        <div className="filter">
            {/* Breadcrumb */}

            <div className="filterUp">
                <div className="breadcrumb">
                    <span>Home</span> <span>›</span> <span className="breadcrumb-active">{type}</span>
                </div>
                <div className="layout-options">
                    <button><FontAwesomeIcon icon={faTh} /></button>
                    <button><FontAwesomeIcon icon={faThLarge} /></button>
                    <button><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>

            <div className="filterDown">
                {/* Filter and Layout Options */}
                <div className="header-options">
                    <button className="filter-btn">
                        <FontAwesomeIcon icon={faFilter} /> Filter
                    </button>

                </div>

                {/* Sort Dropdown */}
                <select className="sort-dropdown" defaultValue="featured">
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="new-arrivals">New Arrivals</option>
                </select>

            </div>



        </div>
    );
}

export default Filter;
