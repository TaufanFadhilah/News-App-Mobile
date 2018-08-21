import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base'
class HeadDetail extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onBack}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

export default HeadDetail;
