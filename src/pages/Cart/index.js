import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCart, getUserCart } from "../../features/user/userSlice";
import { InputNumber, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.userCart) || null;
  const handleDelete = (record) => {
    const data = { ...record, name: record.productName };
    dispatch(deleteProductCart(data));
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
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
      render: (text) => <InputNumber value={text} controls={false} />,
    },
    {
      title: "Subtotal",
      dataIndex: "total",
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
      <Table columns={columns} dataSource={cart} rowKey="id" />
    </div>
  );
};

export default Cart;
