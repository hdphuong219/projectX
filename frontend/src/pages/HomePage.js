import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/Slider/Carousel";
import Cooker from "../components/HotSale/components/Cooker";
import FamilyDevice from "../components/HotSale/components/FamilyDevice";
import Fan from "../components/HotSale/components/Fan";
import Blender from "../components/HotSale/components/Blender";
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
      <Cooker></Cooker>
      <FamilyDevice></FamilyDevice>
      <Blender></Blender>
      <Fan></Fan>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
      {userInfo && userInfo.isAdmin === false && <AppChat></AppChat>}
    </div>
  );
}

export default HomePage;
