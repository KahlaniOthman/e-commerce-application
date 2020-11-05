import React, { useState, useEffect } from "react";
import Carousel from "./caroussel";
import ProductCard from "./ProductCard";
import { cls } from "reactutils";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Example from "../chat";
import supportIcon from "./24-hours-support.png";
import shippingIcon from "./icons8-free-shipping-50.png";
import discountIcon from "./cart_discount_online_sale_shopping_store_tag_icon_123216.png";
import moneyReturnIcon from "./kissclipart-money-return-white-transparent-clipart-computer-ic-bbff750db7834787.png";

const Home = ({ setNav }) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [active, setActive] = useState("");
  const [searchKeyword] = useState("");
  const category = "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category, searchKeyword, active));

    return () => {
      //
    };
  }, [active, dispatch, searchKeyword]);
  return (
    <>
      <Carousel listcat={listcat} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "48px 38px 38px",
        }}
      >
        {listItems.map((el, index) => (
          <Item data={el} key={index} />
        ))}
      </div>
      <div
        className="dailyDeals"
        style={{
          position: "relative",
          padding: "32px 48px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "26px",
          margin: "auto",
          width: "fit-content",
        }}
      >
        DAILY DEALS!
      </div>
      <div
        className="listView"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list &&
          list.map((el, index) => (
            <span
              key={index}
              style={{
                margin: "8px",
                padding: "8px",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              className={cls(
                "listViewItem",
                active === el.key && active !== "all" ? "active" : "",
                active === "all" ? "position" : ""
              )}
              onClick={() => setActive(el.key)}
            >
              {el.label}
            </span>
          ))}
      </div>
      {error && <div style={{ margin: "8px" }}>{error}</div>}

      <div
        // className="container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexFlow: "wrap",
          margin: "0 80px",
        }}
      >
        {loading && <div style={{ margin: "8px" }}>Loading ...</div>}
        {products &&
          products.map((prd, index) => (
            <ProductCard key={index} data={prd} setNav={setNav} />
          ))}
      </div>
      <Example />
    </>
  );
};
export default Home;

const Item = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "8px",
        padding: "8px",
      }}
    >
      <img src={image} alt="icon" width="60px" height="60px" />
      <div style={{ padding: "12px" }}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const listcat = [
  {
    title: "Cat1",
    description: "Une description 1",
    image: "http://lorempixel.com/output/cats-q-c-640-480-10.jpg",
  },
  {
    title: "Cat2",
    description: "Une description 2",
    image: "http://lorempixel.com/output/cats-q-c-640-480-9.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "http://lorempixel.com/output/cats-q-c-640-480-8.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "http://lorempixel.com/output/cats-q-c-640-480-2.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
  },
];


const listItems = [
  {
    title: "Free Shipping",
    image: shippingIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Support 24/7",
    image: supportIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Money Return",
    image: moneyReturnIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Order Discount",
    image: discountIcon,
    description: "Free shipping on all order",
  },
];

const list = [
  {
    label: "Newest",
    key: "",
    onClick: () => {},
  },
  {
    label: "Lowest",
    key: "lowest",
    onClick: () => {},
  },
  {
    label: "Highest",
    key: "highest",
    onClick: () => {},
  },
];




