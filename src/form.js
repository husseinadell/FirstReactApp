import React, { Component } from 'react';
import {Button, notification, Icon, message} from 'antd';


const ButtonGroup = Button.Group;

class FormHussein extends Component
{
	constructor(props)
	{
		super(props);
		this.state={isToggleOn: true};
		this.openNotification= this.openNotification.bind(this);
		this.handleClick= this.handleClick.bind(this);
	}
	handleClick(event)
	{
		if (this.state.isToggleOn == true)
		{
			message.info('Hello Dyaa');
		}
		else
			{message.info('Godbye Dyaa');}
		this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
		console.log(event.target.value);
	}
	openNotification()
	{

		notification.open({
		    message: 'ahla React Da wla eh?',
		    description: 'el task aho ya 3am dyaaaa. 	',
		    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
		  	});
	}
	render()
	{
		return(<ButtonGroup size="large" style={{position: 'absolute', top: '50%', left: '50%', marginLeft: '-90px'}}>
            <Button type="primary" onClick={this.openNotification}>
              <Icon type="user" />Signup
            </Button>
            <Button type="primary" onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Login' : 'Logout'}<Icon type="login" />
            </Button>
          </ButtonGroup>);
	}
} 

export default FormHussein;