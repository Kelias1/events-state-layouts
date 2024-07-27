/* eslint-disable react/prop-types */

import { ShopItem } from '../ShopItem/ShopItem';

export const ListView = (props) => {
  const { products } = props;

  return (
    <div className = "list__view">
      {products.map((product, index) => {
        return (
          <ShopItem key = { index } product = { product } />
        );
      })}
    </div>
  );
}