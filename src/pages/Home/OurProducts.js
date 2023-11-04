import React, { useState } from "react";
import { HeaderTitle, OurProductsButton, OurProductsWrapper } from "./styles";
import { PRODUCTS } from "./constants";
import { Col, Row } from "antd";
import { chunk } from "lodash";
import ProductItem from "../../components/ProductItem";

const OurProducts = () => {
  return (
    <OurProductsWrapper>
      <HeaderTitle>Our Products</HeaderTitle>
      <div style={{ width: "100%" }}>
        {chunk(PRODUCTS.slice(0, 8), 4).map((row) => (
          <Row gutter={[16, 16]} justify="center" style={{ marginTop: 32 }}>
            {row.map((item) => (
              <Col span={5} key={item.id}>
                <ProductItem item={item} />
              </Col>
            ))}
          </Row>
        ))}
      </div>
      <OurProductsButton to="shop">Show More</OurProductsButton>
    </OurProductsWrapper>
  );
};

export default OurProducts;
