import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '../ui/Button/Button'

describe('Button component', () => {
	it('to render correctly', () => {
		expect(shallow(<Button />).length).toEqual(1)
	})

	it('to match snapshot', () => {
		expect(shallow(<Button />)).toMatchSnapshot()
	})
})
