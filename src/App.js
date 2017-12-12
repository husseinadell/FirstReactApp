import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, Icon} from 'antd';
import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';
import './App.css';
import FormHussein from './form.js';
const { Header, Footer, Content } = Layout;
const ButtonGroup = Button.Group;
class App extends Component {
  render() {
    return (
      <div className="App">
         <Layout className="layout">

	      <Header style={{ minHeight:'100px'}}>
          <Menu style={{ lineHeight:'100px' }} theme="dark"
           defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item style={{ width:'20%'}} key="5"><img src={require('./logo-micro.png')} /></Menu.Item>
            <Menu.Item style={{ width:'20%'}} key="1">Home</Menu.Item>
            <Menu.Item style={{ width:'20%'}} key="2">Events</Menu.Item>
            <Menu.Item style={{ width:'20%'}} key="3">Tracks</Menu.Item>
            <Menu.Item style={{ width:'20%'}}key="4">Gallery</Menu.Item>
          </Menu>
        </Header>
	      <Content>
          <img src={require('./home.jpg')} />
          <FormHussein></FormHussein>
        </Content>
	      <Footer style={{background: '#00192e', padding: '50px', margin: '0px'}} >
           <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
           </Row>
        </Footer>
    	 </Layout>
      </div>
    );
  }
}

export default App;
