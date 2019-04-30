import './PagesTopTitle.scss'

const PagesTopTitle = props => {

	return (
		<div className='pages-top-subheader'>
			<div className='container'>
				<div className='pages-top-subheader-wrapper'>
					<h1
						className='pages-top-subheader__title'>
						Places in London
					</h1>
					<ul className='pages-top-subheader__list'>
						<li>
							<a
								href='#'
								className='pages-top-subheader__link'>
								home
							</a>
						</li>

						<li>
							<span> >> </span>
							<a
								href='#'
								className='pages-top-subheader__link'>
								category
							</a>
						</li>

						<li>
							<span> >> </span>
							<a
								href='#'
								className='pages-top-subheader__link'>
								london
							</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
	)
}

export default PagesTopTitle;