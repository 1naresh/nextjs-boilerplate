"use client";
import React from "react";
import { Carousel, Image, Layout } from "antd";
import "./page.scss"

const { Header,Footer } = Layout;

const contentStyle: React.CSSProperties = {
  height: "475px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};
const App: React.FC = () => {
  return (
    <div>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" style={{ height: "64px" }}>
          <Image style={{ width: "117px" }} src={"/logo.png"} alt="logo" />
        </div>
        {/* <div style={{color:"#fff"}} >Aloka Engineers</div> */}
      </Header>
      <div style={{ width: "100%" }} className="ae-carousel">
        <Carousel autoplay >
          <div>
            <div style={contentStyle}>
              {" "}
              <Image style={{ width: "100%",transform:"translateY(-181px)" }} src={"/caro2.jpeg"} alt="logo" />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              {" "}
              <Image style={{ width: "70%",transform:"translateY(-10px)",margin:"0 15%" }} src={"/caro3.jpeg"} alt="logo" />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Image style={{ width: "100%",transform:"translateY(-10px)" }} src={"/caro4.jpeg"} alt="logo" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="ae-content" >
        <div style={{fontSize:"18px",fontWeight:600}} >Our Services</div>
        <ul>
          <li>Funcstion Halis sheds</li>
          <li>All Types of Godoons, Warehouses </li>
          <li>Container cates</li>
          <li>Rooftop cates & Restaurants</li>
          <li>All types of Grills & gates</li>
          <li>Ms-SS Vessels</li>
          <li>MS- sS Storage Tams</li>
        </ul>
      </div>
      <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </div>
  );
};

export default App;
