import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=aea63673afb948878c1fa9ec38ab82d9";
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles});
    }

    render() {
        return (
            <div className="row offset-md-1 mt-3">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0, 45):"" + "..."} desc={element.description?element.description.slice(0, 88):"" + "..."} imgurl={element.urlToImage?element.urlToImage:"https://www.dreamhost.com/blog/wp-content/uploads/2021/03/5cb3549d-46d2-44ec-8e32-3598ad4600f8_how-to-fix-wordpress-404-error_opt-750x498.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
