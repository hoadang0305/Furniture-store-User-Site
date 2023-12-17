import React from "react";
import {
  BannerMask,
  BannerMaskButton,
  BannerMaskContent,
  BannerMaskSub,
  BannerMaskTitle,
  BannerWrapper,
} from "./styles";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerMask>
        <BannerMaskSub>New Arrival</BannerMaskSub>
        <BannerMaskTitle>
          <div>Discover Our New Collection</div>
          <div></div>
        </BannerMaskTitle>
        <BannerMaskContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </BannerMaskContent>
        <Link to={"/shop"}>
          <BannerMaskButton>Buy Now</BannerMaskButton>
        </Link>
      </BannerMask>
    </BannerWrapper>
  );
};

export default Banner;
