import './topContent.scss'
import React from 'react'
const TopContent = () => {
    return (
        <div className="top-content container">
        <h1 className="top-content__title">
            Discover interesting<br />
            <span className="top-content__subtitle">places around Europe</span>
        </h1>
        <span className="top-content__text-one">Find great places to stay eat, or visit from local experts.</span>
        <span className="top-content__text-two">Browse the most desirable categories</span>
        </div>
    )
}

export default TopContent