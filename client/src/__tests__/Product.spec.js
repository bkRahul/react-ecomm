import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { Product } from '../components/Product/Product'

describe('Product Component', () => {
	let wrapper
	let mockAddToCart
	let mockProps

	beforeEach(() => {
		mockAddToCart = jest.fn()
		mockProps = {
			item: {
				imageUrl: 'www.testImage.com',
				price: 10,
				name: 'Black hat',
			},
			addToCart: mockAddToCart,
		}

		wrapper = shallow(<Product {...mockProps} />)
	})

	it('to render a render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render with Product Name', () => {
		expect(wrapper.find('span').first().text()).toEqual(mockProps.item.name)
	})

	it('should render with Product render Price', () => {
		const price = parseInt(wrapper.find('[id="price"]').text())
		expect(price).toEqual(mockProps.item.price)
	})
})

describe('Product Component with Button', () => {
	let wrapper
	let mockAddToCart
	let mockProps

	beforeEach(() => {
		mockAddToCart = jest.fn()
		mockProps = {
			item: {
				imageUrl: 'www.testImage.com',
				price: 10,
				name: 'Black hat',
			},
			addToCart: mockAddToCart,
		}

		wrapper = mount(<Product {...mockProps} />)
	})

	it('to render a correctly', () => {
		expect(wrapper.find('button').text()).toEqual('add to cart')
	})

	it(' to call addToCart when add to cart button is clicked', () => {
		wrapper.find('button').simulate('click')
		expect(mockAddToCart).toHaveBeenCalled()
	})
})
