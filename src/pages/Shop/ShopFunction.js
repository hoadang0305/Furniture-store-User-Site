import React, { useState } from "react";
import { ShopFunctionsWrapper } from "./styles";
import { Button, Dropdown, Tag } from "antd";
import {
  FilterOutlined,
  AppstoreOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "0",
    label: "Category",
    children: [
      {
        key: "Livingroom",
        label: "Living Room",
      },
      {
        key: "Bedroom",
        label: "Bed Room",
      },
      {
        key: "Diningroom",
        label: "Dining Room",
      },
    ],
  },
  {
    label: <div>Price</div>,
    key: "1",
  },
];

const ShopFunction = () => {
  const [filter, setFilter] = useState([]);

  const log = (e) => {
    console.log(e);
  };

  const onClick = ({ key }) => {
    const duplicate = filter.find((element) => element === key);
    if (duplicate === undefined) {
      setFilter(filter.push(key));
    }
  };

  return (
    <ShopFunctionsWrapper>
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        trigger={["click"]}
      >
        <Button>
          <FilterOutlined />
          Filter
        </Button>
      </Dropdown>
      <Button>
        <AppstoreOutlined />
      </Button>
      <Button>
        <PicCenterOutlined />
      </Button>

      <div>
        {console.log(filter)}
        {filter.length !== null &&
          filter.map((item) => (
            <Tag closeIcon onClose={log}>
              {item}
            </Tag>
          ))}
      </div>
    </ShopFunctionsWrapper>
  );
};

export default ShopFunction;
