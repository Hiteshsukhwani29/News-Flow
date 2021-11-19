import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    render() {
        return (
            <div className="row offset-md-1">
                <div className="col-md-4">
                    <NewsItems title="Title" desc="Description" imgurl="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" />
                </div>
                <div className="col-md-4">
                    <NewsItems title="Title" desc="Description" imgurl="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" />
                </div>
                <div className="col-md-4">
                    <NewsItems title="Title" desc="Description" imgurl="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" />
                </div>
            </div>
        )
    }
}
