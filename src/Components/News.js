import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    render() {
        return (
            <div>
                <NewsItems title="Title" desc="Description"/>
                <NewsItems/>
                <NewsItems/>
            </div>
        )
    }
}
