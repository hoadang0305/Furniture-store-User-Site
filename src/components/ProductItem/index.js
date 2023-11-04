import React from "react";
import {
  ProductItemImage,
  ProductItemImageLabel,
  ProductItemInfo,
  ProductItemPrice,
  ProductItemPriceSub,
  ProductItemPriceText,
  ProductItemShortDesc,
  ProductItemTitle,
  ProductItemWrapper,
} from "./styles";

const ProductItem = ({ item, style }) => {
  const { name, image, price, shortDesc, sale, priceSale } = item;

  return (
    <ProductItemWrapper style={style}>
      <ProductItemImage style={{ backgroundImage: `url(${image})` }}>
        {sale && sale !== "" && (
          <ProductItemImageLabel>{sale}</ProductItemImageLabel>
        )}
      </ProductItemImage>

      <ProductItemInfo>
        <ProductItemTitle>{name}</ProductItemTitle>
        <ProductItemShortDesc>{shortDesc}</ProductItemShortDesc>
        <ProductItemPrice>
          <ProductItemPriceText>
            {sale && sale !== "" ? priceSale : price}
          </ProductItemPriceText>
          {sale && sale !== "" && (
            <ProductItemPriceSub>{price}</ProductItemPriceSub>
          )}
        </ProductItemPrice>
      </ProductItemInfo>
    </ProductItemWrapper>
  );
};

export default ProductItem;
