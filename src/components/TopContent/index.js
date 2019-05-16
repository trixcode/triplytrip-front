import './topContent.scss'

const TopContent = () => {
    return (
        <div className="top-content container">
        <h1 className="top-content__title">
            Discover interesting<br />
            <span>places around Europe</span>
        </h1>
        <span className="top-content__text-one">Find great places to stay eat, or visit from local experts.</span>
        <span className="top-content__text-two">Browse the most desirable categories</span>
        </div>
    )
}

export default TopContent