import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { ShopFunctionPagination } from "./styles";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getFunctionProducts,
} from "../../features/product/productSlice";
import { chunk } from "lodash";
import ProductItem from "../../components/ProductItem";
import ShopFunction from "./ShopFunction";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allProducts) || [];
  const functionProducts =
    useSelector((state) => state.product.funcProducts) || [];
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getFunctionProducts(`?page=${current}&limit=12`));
  }, [dispatch, current]);

  return (
    <div>
      {products && products !== null && (
        <div style={{ background: "#fff" }}>
          <BreadcrumbCustom />

          <ShopFunction />

          <div style={{ width: "100%", margin: "3rem 0" }}>
            {functionProducts.length !== 0 ? (
              chunk(functionProducts, 4).map((row) => (
                <Row
                  gutter={[16, 16]}
                  justify="center"
                  style={{ marginTop: 32 }}
                >
                  {row.map((item) => (
                    <Col span={5} key={item.id}>
                      <ProductItem item={item} />
                    </Col>
                  ))}
                </Row>
              ))
            ) : (
              <></>
            )}
          </div>

          <ShopFunctionPagination
            current={current}
            total={products.length}
            defaultPageSize={12}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default Shop;
