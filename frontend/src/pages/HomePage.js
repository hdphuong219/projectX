import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/Slider/Carousel";
import ListCategories from "../components/HotSale/components/ListCategories";
import Footer from "../components/footer/Footer";
import AppChat from "../components/AppChat/AppChat";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";

function HomePage() {
  const { userInfo } = useSelector((state) => state.userSignin);

  return (
    <div style={{ position: "relative" }}>
      <Header></Header>
      <Carousel></Carousel>
      <ListCategories></ListCategories>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
      {userInfo && userInfo.isAdmin === false && <AppChat></AppChat>}
    </div>
  );
}

export default HomePage;
