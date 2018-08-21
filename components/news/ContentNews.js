import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { H1 } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid';
class ContentNews extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View>
                    <Grid style={{
                        margin: 5,
                        padding: 5,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Row>
                            <Image source={{ uri: this.props.data.urlToImage != null ? this.props.data.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC60H16wFwjzCzDzbADG_dskcKiqV-v_3CTE_SUDCX42Z44Mnc' }} style={{
                                // width: 355,
                                height: 200,
                                flex: 1

                            }} />
                        </Row>
                        <Row>
                            <H1>
                                {this.props.data.title}
                            </H1>
                        </Row>
                        <Row>
                            <Text>
                                {this.props.data.author}
                            </Text>
                        </Row>
                    </Grid>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ContentNews;
