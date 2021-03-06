import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalresults: 0
        }
    }

    async componentDidMount() {
        this.props.setProgress(10)
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30)
        let parseddata = await data.json();
        this.props.setProgress(70)
        this.setState({ articles: parseddata.articles, totalresults: parseddata.totalResults });
        this.props.setProgress(100)
        
    }

    fetchData = async () => {
        this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseddata = await data.json();

            this.setState({
                loading: false,
                articles: this.state.articles.concat(parseddata.articles)
            })
    }

    render() {
        return (
            <div style={{marginTop:"90px"}}>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} 
                    next={this.fetchData}
                    hasMore={this.state.articles.length!==this.state.totalresults}
                    loader={<Spinner />}
                    >
                    <div className="container">
                        <div className="row" style={{ margin: "0px" }}>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 30) : "" + "..."} desc={element.description ? element.description.slice(0, 88) : "" + "..."} imgurl={element.urlToImage ? element.urlToImage : "https://www.dreamhost.com/blog/wp-content/uploads/2021/03/5cb3549d-46d2-44ec-8e32-3598ad4600f8_how-to-fix-wordpress-404-error_opt-750x498.jpg"} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
