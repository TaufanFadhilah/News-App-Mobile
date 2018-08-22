import React, { Component } from 'react';
import { Container } from 'native-base'
import Loading from './Loading'
class Layout extends Component {
    
    constructor(props){
        super(props)
    }

    state = {
        loaded: false
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({loaded: true})
    }

    render() {
        if (this.state.loaded) {
            return (
                <Container>
                    {this.props.children}
                </Container>
            )
        }else{
            return (
                <Loading />
            );
        }
    }
}

export default Layout;
