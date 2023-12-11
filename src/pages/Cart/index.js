import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/user/userSlice";
import { InputNumber, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CART_ITEM = [
  {
    id: "6559c018a7e755f9e0b5c0f9",
    name: "Wystfield Coffee Table with Lift Top",
    price: 400,
    originPrice: 420,
    quantity: 1,
    subTotal: 400,
  },
  {
    id: "6559c018a7e755f9e0b5c0fa",
    name: "Maimz Sofa",
    price: 700,
    originPrice: 882,
    quantity: 2,
    subTotal: 1400,
  },
];

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.userCart) || CART_ITEM;
  const [data, setData] = useState(cart);
  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);
  const handleDelete = (record) => {
    const newData = data.filter((item) => item.id !== record.id);
    setData(newData);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "product",
      render: (text, record) => <Link to={`/shop/${record.id}`}>{text}</Link>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <InputNumber value={text} />,
    },
    {
      title: "Subtotal",
      dataIndex: "subTotal",
      key: "subtotal",
    },
    {
      title: "",
      dataIndex: "",
      key: "delete",
      render: (_, record) => (
        <Button onClick={() => handleDelete(record)} icon={<DeleteFilled />} />
      ),
    },
  ];

  return (
    <div style={{ background: "#fff" }}>
      <BreadcrumbCustom />
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Cart;
