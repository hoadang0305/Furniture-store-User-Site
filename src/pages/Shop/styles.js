import styled from "styled-components";
import { Pagination } from "antd";

export const ShopFunctionsWrapper = styled.div`
  background: #f9f1e7;
  padding: 1rem;
  display: flex;
  align-items: center;

  & > button {
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const ShopFunctionPagination = styled(Pagination)`
  text-align: center;
  padding: 1.5rem 0;
`;
