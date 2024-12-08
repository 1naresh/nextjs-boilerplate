'use client';
import React from 'react';
import { Breadcrumb, Carousel, Image, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const items = new Array(0).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const contentStyle: React.CSSProperties = {
  height: '320px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};
const App: React.FC = () => {

  return (
    <div>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{height:"64px"}} >
          <Image style={{width:"117px"}} src={"/logo.png"} alt="logo" />
        </div>
        {/* <div style={{color:"#fff"}} >Aloka Engineers</div> */}
      </Header>
      {/* <div style={{width:"100%"}} className='ae-carousel' >
        <Carousel>
          <div>
            <div style={contentStyle}> <Image  src={"/logo.png"} alt="logo" /> </div>
          </div>
          <div>
            <div style={contentStyle}> <Image  src={"/logo.png"} alt="logo" /> </div>
          </div>
          <div>
            <div style={contentStyle}><Image  src={"/logo.png"} alt="logo" />3</div>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};

export default App;