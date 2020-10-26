import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/store/shop/shop.selectors';
import Product from '../Product/Product';
import { CollectionContainer, Items, Title } from './Collection.styles';

const Collection = ({ collection }) => {
  const { items, title } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </Items>
    </CollectionContainer>
  );
};

//passing props with state
const mapStateToProps = (state, ownProps) => ({
  //selectCollection is a function that return another function
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
