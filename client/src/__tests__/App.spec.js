/* istanbul ignore file */

import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../App'

it('expects to render a App component', () => {
	expect(shallow(<App />).length).toEqual(1)
})
