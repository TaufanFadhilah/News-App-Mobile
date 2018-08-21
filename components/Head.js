import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Subtitle } from 'native-base'
class Head extends Component {
    
    render() {
        return (
            <Header>
                <Left />
                <Body>
                    <Title>News App</Title>
                    <Subtitle>{this.props.country}</Subtitle>
                </Body>
                <Right />
            </Header>
        );
    }
}

export default Head;
