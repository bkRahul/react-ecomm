import React, { memo } from 'react'
import {
	CartDropdownItemContainer,
	Image,
	ItemDetails,
	Name,
	Info,
} from './CartDropdownItem.styles'

export const CartDropdownItem = memo(
	({ item: { imageUrl, name, price, qty } }) => {
		return (
			<CartDropdownItemContainer>
				<Image src={imageUrl} alt='product' />
				<ItemDetails>
					<Name>{name}</Name>
					<Info>
						{qty} &#10005; ${price}
					</Info>
				</ItemDetails>
			</CartDropdownItemContainer>
		)
	},
)
