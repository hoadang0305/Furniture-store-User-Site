import React from "react";
import {
  BrowseRangeCol,
  BrowseRangeImage,
  BrowseRangeRow,
  BrowseRangeWrapper,
  HeaderTitle,
} from "./styles";
import { BROWSERANGEDATA } from "./constants";

const BrowseRange = () => {
  return (
    <BrowseRangeWrapper>
      <HeaderTitle>Browse The Range</HeaderTitle>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <BrowseRangeRow justify="space-around">
        {BROWSERANGEDATA.map((item) => (
          <BrowseRangeCol>
            <BrowseRangeImage src={item.image} alt={item.name} />
            <div>{item.name}</div>
          </BrowseRangeCol>
        ))}
      </BrowseRangeRow>
    </BrowseRangeWrapper>
  );
};

export default BrowseRange;
