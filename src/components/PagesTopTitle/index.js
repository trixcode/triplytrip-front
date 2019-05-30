import './PagesTopTitle.scss'

const PagesTopTitle = props => {
	const { title, link } = props;
	return (
		<div className='pages-top-subheader'>
			<div className='container'>
				<div className='pages-top-subheader-wrapper'>
					<h1
						className='pages-top-subheader__title'>
						{title}
					</h1>
					<ul className='pages-top-subheader__list'>
						{link.map((linkItem) => (
							<li key={linkItem}>
								<a
									href='#'
									className='pages-top-subheader__link'>
									{linkItem}
									<span> >> </span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
)}

export default PagesTopTitle;