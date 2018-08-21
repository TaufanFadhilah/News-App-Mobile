import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import Flag from 'react-native-flags'

export default class FooterTabsIconTextExample extends Component {

    constructor(props){
        super(props)
        this.props._onClick = this.props._onClick.bind(this)
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props._onClick("ID")} vertical>
                        <Flag code="ID" size={32} />
                        <Text>Indonesia</Text>
                    </Button>
                    <Button onPress={() => this.props._onClick("US")} vertical>
                        <Flag code="US" size={32} />
                        <Text>America</Text>
                    </Button>
                    <Button onPress={() => this.props._onClick("JP")} vertical>
                        <Flag code="JP" size={32} />
                        <Text>Japan</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}