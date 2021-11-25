import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title,desc,imgurl,newsUrl} = this.props;
        return (
            <div>
                <div className="card mb-3" style={{height: "380px"}}>
                    <img src={imgurl} className="card-img-top" alt="..." style={{height: "150px"}}/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl} traget="_blank" className="btn btn-outline-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
