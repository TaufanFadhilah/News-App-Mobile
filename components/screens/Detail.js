import React, { Component } from 'react';
import { Image, Text, Linking } from 'react-native'
import { Container, Content, H1, Button, Col } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid';
import Head from '../HeadDetail'
class Detail extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props)
        this.state = props.navigation.state.params
        this._onBack = this._onBack.bind(this)
    }

    _onBack() {
        this.props.navigation.goBack()   
    }

    render() {
        return (
            <Container>
                <Head onBack={this._onBack} title={this.state.title}/>
                <Content>
                    <Grid>
                        <Row>
                            <Image source={{ uri: this.state.urlToImage != null ? this.state.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC60H16wFwjzCzDzbADG_dskcKiqV-v_3CTE_SUDCX42Z44Mnc' }} style={{
                                paddingLeft: 5,
                                paddingRight: 5,
                                height: 200,
                                flex: 1
                            }} />
                        </Row>
                    </Grid>
                    <Grid style={{
                        padding: 10
                    }}>
                        <Row>
                            <H1>
                                {this.state.title}
                            </H1>
                        </Row>
                        <Row>
                            <Text>
                                {this.state.description}
                            </Text>
                        </Row>
                        <Row style={{margin: 10}}>
                            <Col>
                                <Button full onPress={() => { Linking.openURL(this.state.url) }}>
                                    <Text style={{color: 'white'}}>Baca selengkapnya!</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Text style={{ color: 'red' }}>
                                {this.state.author}, {this.state.publishedAt}
                            </Text>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default Detail;
