import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple delays release of digital ID cards to 2022",
            "description": "Apple has delayed the release of a feature that will eventually allow you to store your ID in the company’s Wallet app. In an update to the official iOS 15 website\r\n that was spotted by MacRumors\r\n, Apple says that functionality will now arrive sometime in ea…",
            "url": "https://www.engadget.com/apple-wallet-digital-id-delay-195046762.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/507edbb0-4c92-11ec-9de8-c69985c142dc",
            "publishedAt": "2021-11-23T19:50:46Z",
            "content": "Apple has delayed the release of a feature that will eventually allow you to store your ID in the companys Wallet app. In an update to the official iOS 15 website\r\n that was spotted by MacRumors\r\n, A… [+1227 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Valentina Palladino",
            "title": "The Apple Watch Series 7 hits new low of $380 ahead of Black Friday",
            "description": "Apple's latest smartwatch came out last month and, while not incredibly different than than Series 6, it impressed us with its larger display and faster charging. Being the newest Apple Watch, we don't expect to see major discounts on the Series 7 this holida…",
            "url": "https://www.engadget.com/apple-watch-series-7-hits-new-low-of-380-ahead-of-black-friday-133854389.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/f7478130-2b96-11ec-a1fb-7ab26f0589b0",
            "publishedAt": "2021-11-23T13:38:54Z",
            "content": "Apple's latest smartwatch came out last month and, while not incredibly different than than Series 6, it impressed us with its larger display and faster charging. Being the newest Apple Watch, we don… [+2390 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Mitchell Clark",
            "title": "Apple’s digital driver’s license has been delayed to next year",
            "description": "Apple’s digital driver’s license, which promises to let you use your phone to identify yourself at TSA checkpoints, won’t be arriving until early 2022. The company says it’ll be rolling out first in Arizona and Georgia.",
            "url": "https://www.theverge.com/2021/11/23/22799338/apple-digital-driver-license-delay-2022-ios-15",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Wfw9Cd_dByjSlegtDEg-HuLj5jE=/0x361:1423x1106/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22643141/lcimg_f986f942_4ae9_4c26_ad87_37d148f9859d.jpg",
            "publishedAt": "2021-11-23T22:41:46Z",
            "content": "The feature was previously slated for late 2021\r\nImage: Apple\r\nApples digital drivers license / ID feature wont be coming until early 2022, according to an update to Apples iOS 15 page that MacRumors… [+2213 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Phillip Tracy",
            "title": "Tile Is Being Acquired After Apple’s AirTags Made Location-Tracking a Thing",
            "description": "Tile, which dominated the Bluetooth tracker market for years, is reportedly being acquired by family location-sharing service Life360 in a deal valued at $205 million. Read more...",
            "url": "https://gizmodo.com/tile-is-being-acquired-after-apple-s-airtags-made-locat-1848110596",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d7dd2b4a7d455ca88a2a8bcf69be6325.jpg",
            "publishedAt": "2021-11-23T19:30:00Z",
            "content": "Tile, which dominated the Bluetooth tracker market for years, is reportedly being acquired by family location-sharing service Life360 in a deal valued at $205 million. \r\nThe acquisition comes as Tile… [+3838 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Samuel Axon",
            "title": "Bluetooth tracking company Tile acquired for $205 million",
            "description": "Acquisition gives Tile access to more funds, users.",
            "url": "https://arstechnica.com/gadgets/2021/11/bluetooth-tracking-company-tile-acquired-for-205-million/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/06/Tile-Pro-1-760x380.jpg",
            "publishedAt": "2021-11-23T20:34:41Z",
            "content": "1 with 1 posters participating\r\nTile, a company that pioneered consumer trackers, will be acquired by Life360, an Australian company whose services help families keep tabs on one another's safety.\r\nT… [+2389 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Italy fines Apple and Amazon $225 mln - Reuters",
            "description": "Italy's antitrust authority has fined U.S. tech giants Amazon and Apple a total of more than 200 million euros ($225 million) for alleged anti-competitive cooperation in the sale of Apple and Beats products.",
            "url": "https://www.reuters.com/video/watch/idPEdO?now=true",
            "urlToImage": "https://ajo.prod.reuters.tv/api/v2/img/619cc64ee4b085d396fd1f41-1637664334409?location=LANDSCAPE",
            "publishedAt": "2021-11-23T11:19:05Z",
            "content": "Posted \r\nItaly's antitrust authority has fined U.S. tech giants Amazon and Apple a total of more than 200 million euros ($225 million) for alleged anti-competitive cooperation in the sale of Apple an… [+16 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Italy fines Apple and Amazon $225 mln - Reuters",
            "description": "Italy's antitrust authority has fined U.S. tech giants Amazon and Apple a total of more than 200 million euros ($225 million) for alleged anti-competitive cooperation in the sale of Apple and Beats products. Francis Maguire reports.",
            "url": "https://www.reuters.com/video/watch/idOVF4TQEFF",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20211123&i=OVF4TQEFF&r=OVF4TQEFF&t=2",
            "publishedAt": "2021-11-23T11:12:42Z",
            "content": "Posted \r\nItaly's antitrust authority has fined U.S. tech giants Amazon and Apple a total of more than 200 million euros ($225 million) for alleged anti-competitive cooperation in the sale of Apple an… [+41 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Apple, Zoom, Abercrombie, Walt Disney - Reuters",
            "description": "Wall Street's main indexes slipped on Tuesday, with the Nasdaq lagging the most as rising Treasury yields weighed on major technology stocks, while gains in banking and energy stocks helped limit broader market losses.",
            "url": "https://www.reuters.com/markets/asia/apple-zoom-abercrombie-walt-disney-2021-11-23/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=60",
            "publishedAt": "2021-11-23T16:10:00Z",
            "content": "Wall Street's main indexes slipped on Tuesday, with the Nasdaq lagging the most as rising Treasury yields weighed on major technology stocks, while gains in banking and energy stocks helped limit bro… [+1344 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Italy's antitrust fines Amazon, Apple more than 200 mln euros for alleged collusion - Reuters",
            "description": "Italy's antitrust authority has fined U.S. tech giants Amazon.com <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a> and Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> a total of more tha…",
            "url": "https://www.reuters.com/technology/italys-antitrust-fines-amazon-apple-more-than-200-mln-euros-alleged-collusion-2021-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/Zcxtq6c6CLe7vYC3NgsdSQSn3yY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJK6E76VZJOLNHOUTPAXRUIPYE.jpg",
            "publishedAt": "2021-11-23T07:42:00Z",
            "content": "MILAN, Nov 23 (Reuters) - Italy's antitrust authority has fined U.S. tech giants Amazon.com (AMZN.O) and Apple Inc (AAPL.O) a total of more than 200 million euros ($225 million) for allegedly engagin… [+897 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Apple critic Tile Inc acquired by Life360 in $205 mln deal - Reuters",
            "description": "Tile Inc, a maker of tracking tags that was a vocal critic of Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a>, has been acquired by Life360 <a href=\"https://www.reuters.com/companies/LIFX.PK\" target=\"_blank\">(LIFX.PK)…",
            "url": "https://www.reuters.com/markets/us/apple-critic-tile-inc-acquired-by-life360-205-mln-deal-2021-11-23/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=59",
            "publishedAt": "2021-11-23T00:00:00Z",
            "content": "Nov 22 (Reuters) - Tile Inc, a maker of tracking tags that was a vocal critic of Apple Inc (AAPL.O), has been acquired by Life360 (LIFX.PK), a location-sharing app maker.\r\nThe deal was valued at $205… [+1685 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EU's Vestager cheers as lawmakers vote for tougher tech laws - Reuters",
            "description": "A key committee of EU lawmakers on Tuesday agreed to tougher laws targeting Amazon <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a>, Apple <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a>, Alphabet…",
            "url": "https://www.reuters.com/markets/europe/eus-vestager-cheers-lawmakers-vote-tougher-tech-laws-2021-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/1oYe_HSvb9fmxvgoHtxg_67msA4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6YLCCJZAKBISXFVUXDT4FDCJAE.jpg",
            "publishedAt": "2021-11-23T13:10:00Z",
            "content": "STRASBOURG, Nov 23 (Reuters) - A key committee of EU lawmakers on Tuesday agreed to tougher laws targeting Amazon (AMZN.O), Apple (AAPL.O), Alphabet (GOOGL.O) unit Google and Facebook (FB.O), earning… [+2397 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Samsung Elec picks Taylor, Texas as new $17 bln U.S. chip plant site - Reuters",
            "description": "South Korean tech giant Samsung Electronics Co Ltd <a href=\"https://www.reuters.com/companies/005930.KS\" target=\"_blank\">(005930.KS)</a> said on Wednesday it had picked Taylor, Texas as the location for a new $17 billion chip plant, instead of state capital A…",
            "url": "https://www.reuters.com/technology/samsung-elec-picks-taylor-texas-new-17-bln-us-chip-plant-site-2021-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/0ZSzLe6UpNet5aF6XdXsRmu9eHA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6WIIGNZIM5MUZI74J34PKGCBRY.jpg",
            "publishedAt": "2021-11-23T23:15:00Z",
            "content": "Logos of Apple and Samsung are seen at a main shopping area following the coronavirus disease (COVID-19) outbreak in Shanghai, China September 24, 2020. REUTERS/Aly Song/FilesSEOUL, Nov 24 (Reuters) … [+704 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Moscow says 13 foreign tech firms must be represented on Russian soil by 2022 - Reuters",
            "description": "Russia has demanded that 13 foreign technology companies be officially represented on Russian soil by the end of 2021, but has given few details on what it requires in practice, targeting some firms that already have Russian offices.",
            "url": "https://www.reuters.com/markets/europe/moscow-says-13-foreign-tech-firms-must-be-represented-russian-soil-by-2022-2021-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/AfLLOFWKAbaNM9LR3oUVchbV-yg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VYDNZPUPY5OVXAOCXCWXHHUAXM.jpg",
            "publishedAt": "2021-11-23T12:16:00Z",
            "content": "MOSCOW, Nov 23 (Reuters) - Russia has demanded that 13 foreign technology companies be officially represented on Russian soil by the end of 2021, but has given few details on what it requires in prac… [+1939 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Futures dip as rising yields dent tech shares - Reuters",
            "description": "U.S. stock index futures fell on Tuesday as rising Treasury yields weighed on major technology stocks, while bank shares extended gains as investors priced in an early policy tightening by the Federal Reserve.",
            "url": "https://www.reuters.com/markets/europe/futures-dip-rising-yields-dent-tech-shares-2021-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/NoWHFQyzBDvywYBwOFUNP_kMNTE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JUTZ3BWVWVOA3D5UMGA3YWCBOY.jpg",
            "publishedAt": "2021-11-23T12:00:00Z",
            "content": "Nov 23 (Reuters) - U.S. stock index futures fell on Tuesday as rising Treasury yields weighed on major technology stocks, while bank shares extended gains as investors priced in an early policy tight… [+1796 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Nasdaq tumbles for second day as Big Tech loses ground - Reuters",
            "description": "The Nasdaq tumbled for a second straight session on Tuesday, and the S&P 500 also fell, as rising Treasury yields prompted investors to sell Tesla, Microsoft and other Big Tech names.",
            "url": "https://www.reuters.com/markets/europe/nasdaq-tumbles-second-day-big-tech-loses-ground-2021-11-23/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=60",
            "publishedAt": "2021-11-23T19:24:00Z",
            "content": "Nov 23 (Reuters) - The Nasdaq tumbled for a second straight session on Tuesday, and the S&amp;P 500 also fell, as rising Treasury yields prompted investors to sell Tesla, Microsoft and other Big Tech… [+3181 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Derrek Lee",
            "title": "Tile to be acquired by Life360 amid new competition from Apple and Samsung",
            "description": "The two services will combine forces.\n\nWhat you need to know\n\n\nLife360 is acquiring Tile for $205 million.\nTile will continue to operate as its own brand entity.\nLife360 will benefit from Tile's brand presence while Tile will expand its Find network with Life…",
            "url": "https://www.androidcentral.com/life360-to-acquire-tile",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/11/tile-mate-2022-lifestyle-keys.jpg",
            "publishedAt": "2021-11-23T01:15:38Z",
            "content": "Life360 announced on Monday that it has entered an agreement to acquire Tile, the company that popularized the Bluetooth trackers that recently inspired Apple and Samsung.\r\nThe acquisition will allow… [+1929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Samuel Tolbert",
            "title": "You can't miss out on two Star Wars wireless charging pads for half-off",
            "description": "Anyone that needs a new wireless charging pad is in luck. Two Star Wars-themed wireless charging pads are half off right now, meaning you can save $25 no matter which model you prefer. One is the iconic Millennium Falcon, while the other is Mando's helmet fro…",
            "url": "https://www.androidcentral.com/save-50-two-star-wars-wireless-charging-pads-cant-miss-deal",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/11/star-wars-mandalorian-wireless-charger-hero-white.jpg",
            "publishedAt": "2021-11-23T21:33:34Z",
            "content": "Anyone that needs a new wireless charging pad is in luck. Two Star Wars-themed wireless charging pads are half off right now, meaning you can save $25 no matter which model you prefer. One is the ico… [+1178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Alex Dobie",
            "title": "Bag a basic Android phone for less than $100 for Black Friday",
            "description": "Decent savings on a trio of basic phones that don't cost the earth.\n\nBLU is known for its range of no-frills Android phones, and now three of the manufacturer's bargain-bucket handsets are cheaper than ever for Black Friday. Best Buy has the BLU V50, V81 and …",
            "url": "https://www.androidcentral.com/bag-basic-android-phone-less-100-black-friday",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/11/blu-vivo-x6-lifestyle-03.jpg",
            "publishedAt": "2021-11-23T17:18:49Z",
            "content": "BLU is known for its range of no-frills Android phones, and now three of the manufacturer's bargain-bucket handsets are cheaper than ever for Black Friday. Best Buy has the BLU V50, V81 and V91 avail… [+1365 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Michael L Hicks",
            "title": "Fitness trackers keep ditching buttons for touchscreens, and it's terrible",
            "description": "We all collectively pretend smartwatch touchscreens work for fitness. But they're consistently unreliable.\n\n\n\nMost of the best fitness trackers and fitness smartwatches use a combination of touchscreens and buttons. The more complicated the UI or more compact…",
            "url": "https://www.androidcentral.com/fitness-smartwatch-touchscreens-are-worst",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/11/garmin-forerunner-945-lte-and-fitbit-sense.jpg",
            "publishedAt": "2021-11-23T13:00:02Z",
            "content": "Source: Michael Hicks / Android Central\r\nMost of the best fitness trackers and fitness smartwatches use a combination of touchscreens and buttons. The more complicated the UI or more compact the desi… [+7711 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Reuters",
            "title": "Apple sues Israeli cyber spyware firm NSO Group for surveillance of users",
            "description": "iPhone-maker also seeks to ban firm behind Pegasus spyware from using any Apple software, services or devicesTech giant Apple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for the surveilla…",
            "url": "https://amp.theguardian.com/technology/2021/nov/23/apple-sues-israeli-cyber-firm-nso-group",
            "urlToImage": "https://i.guim.co.uk/img/media/248b12ed4c652a4175674607c82374388a41f30c/0_0_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9e44ed9fd549341c20effcc63cf4eee7",
            "publishedAt": "2021-11-23T18:45:51Z",
            "content": "Tech giant Apple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for the surveillance and targeting of Apple users with its Pegasus… [+163 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="row offset-md-1">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title.slice(0, 45) + "..."} desc={element.description.slice(0, 88) + "..."} imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
