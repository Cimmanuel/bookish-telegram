import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import sections from './directory.data'
import './directory.style.scss'

class Directory extends Component {
	constructor() {
		super()

		this.state = {
			sections
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{
					this.state.sections.map(({id, ...otherSectionProps}) => {
						return (
							<MenuItem key={id} {...otherSectionProps} />
						)
					})
				}
			</div>
		)
	}
}

export default Directory
