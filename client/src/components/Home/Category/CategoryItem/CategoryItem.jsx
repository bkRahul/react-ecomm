import React from 'react'
import { withRouter } from 'react-router-dom'

import classes from './CategoryItem.module.scss'

const CategoryItem = ({ title, imageUrl, linkUrl, size, history, match }) => (
	<div
		className={`${size === 'large' ? classes.large : ''} ${
			classes.Category_item
		}`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className={classes.background_image}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className={classes.content}>
			<h1 className={classes.title}>{title.toUpperCase()}</h1>
			<span className={classes.subtitle}>SHOP NOW</span>
		</div>
	</div>
)

export default withRouter(CategoryItem)
