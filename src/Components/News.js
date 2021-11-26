import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aea63673afb948878c1fa9ec38ab82d9&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles, totalresults: parseddata.totalResults});
    }

    handlePrevclick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aea63673afb948878c1fa9ec38ab82d9&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles});

        this.setState({
            page: this.state.page-1,
            loading: false,
        })
        console.log(this.page);

    }

    handleNextclick = async ()=>{

        if(this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aea63673afb948878c1fa9ec38ab82d9&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles});


        this.setState({
            page: this.state.page+1,
            loading: false,
        })
    }

    }

    render() {
        return (
            <div className="container mt-3 mb-3">
                {this.state.loading && <Spinner/>}
                <div className="row" style={{margin:"0px"}}>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0, 30):"" + "..."} desc={element.description?element.description.slice(0, 88):"" + "..."} imgurl={element.urlToImage?element.urlToImage:"https://www.dreamhost.com/blog/wp-content/uploads/2021/03/5cb3549d-46d2-44ec-8e32-3598ad4600f8_how-to-fix-wordpress-404-error_opt-750x498.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between mt-5">
                        <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-primary" onClick={this.handlePrevclick}>&larr; Previous</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleNextclick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
