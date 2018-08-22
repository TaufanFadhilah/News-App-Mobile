import React, { Component } from 'react';
import { Content, Toast } from 'native-base'
import Layout from '../Layout'
import Head from '../Head'
import ContentNews from '../news/ContentNews'
import Footer from "../Footer"
import Loading from '../Loading'
class News extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props)
        this._onClick = this._onClick.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    state = {
        country: 'ID',
        data: {},
        loaded: false,
    }

    async getData(){
        const req = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=business&apiKey=678a3681cdf74ed0877a9b95d127488a`)
        const data = await req.json()
        this.setState({ data: data.articles })
        this.setState({ loaded: true })
    }

    loopingContent(){
        if (this.state.loaded) {
            return this.state.data.map((data, i) => (
                <ContentNews key={i} data={data} onPress={() => this.props.navigation.push('Detail', data)} />
            ))
        }else{
            this.getData()
            return <Loading />
        }
    }

    _onClick(code) {
        this.setState({
            country: code,
            loaded: false
        })
        Toast.show({
            text: code + " News",
            duration: 1000
        })
    }

    render() {
        return (
            <Layout>
                <Head country={this.state.country} />
                <Content>
                    {this.loopingContent()}
                </Content>
                <Footer _onClick={this._onClick} />
            </Layout>
        );
    }
}

export default News;
