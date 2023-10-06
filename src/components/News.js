import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Clare Foran, Haley Talbot, Morgan Rimmer, Annie Grayer, Lauren Fox, Melanie Zanona",
            "title": "Biden signs stopgap measure to avert shutdown ahead of midnight deadline - CNN",
            "description": "President Joe Biden signed a stopgap bill to avert a government shutdown just hours ahead of a critical midnight deadline when funding for federal agencies was set to run out.",
            "url": "https://www.cnn.com/2023/09/30/politics/us-government-shutdown-latest/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230930093730-01-us-capitol-building-0930.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-01T03:19:00Z",
            "content": "President Joe Biden signed into law the stopgap bill to avert a government shutdown passed by Congress just hours ahead of a critical midnight deadline when funding for federal agencies was set to ru… [+3630 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PEOPLE"
            },
            "author": "Alexis Jones",
            "title": "Taylor Swift Steps Out for Dinner with Blake Lively and Sophie Turner in N.Y.C. — See the Photos! - Yahoo Entertainment",
            "description": "The Grammy winner was photographed heading into Italian restaurant Emilio’s Ballato in New York City with a group of girlfriends the night before Travis...",
            "url": "https://people.com/taylor-swift-steps-out-for-dinner-with-blake-lively-sophie-turner-in-n-y-c-photos-8303228",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ow1cVYpwjo_altKdsWBUTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/people_218/a95117cb66e07beb0b554044898c5f25",
            "publishedAt": "2023-10-01T03:16:00Z",
            "content": "The Grammy winner was photographed heading into Italian restaurant Emilios Ballato in New York City with a group of girlfriends the night before Travis Kelce's game against the Jets\r\nTheImageDirect.c… [+2944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Sarah Rumpf-Whitten",
            "title": "Powerball jackpot reaches $1 billion mark after no grand prize winner in Saturday's drawing - Fox Business",
            "description": "The Powerball jackpot is now at the $1 billion mark with a cash option of $478.2 million after no one took home the grand prize Saturday.",
            "url": "https://www.foxbusiness.com/markets/powerball-jackpot-increases-960-million-edges-towards-billion-dollar-grand-prize",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/POWERB-2.jpg?ve=1&tl=1",
            "publishedAt": "2023-10-01T03:11:23Z",
            "content": "The Powerball has once again reached the 1 billion mark with an estimated $1.04 billion jackpot, for the next drawing on Monday night after no grand prize winner in Saturday's drawing. The jackpot ha… [+1577 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Caroline Linton, Ellis Kim",
            "title": "Rep. Jamaal Bowman pulls fire alarm ahead of House vote to fund government - CBS News",
            "description": "In a statement, Bowman said that he was \"rushing to make\" the vote and \"came to a door that is usually open for votes but today would not open.\"",
            "url": "https://www.cbsnews.com/news/jamaal-bowman-fire-alarm-house-vote-government-shutdown/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/09/30/4ca0d301-28c2-441b-b7b2-fbe739a5620b/thumbnail/1200x630/90598158928464476fe6f59ae6ecfc03/gettyimages-1492710319.jpg?v=42bbcea0e3eaab3fb7d470f54c86b0bd",
            "publishedAt": "2023-10-01T02:53:00Z",
            "content": "Democratic Rep. Jamaal Bowman of New York pulled the fire alarm in a Capitol office building on Saturday ahead of a crucial, last-minute House vote that ultimately avert a government shutdown, his of… [+2111 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Action Network"
            },
            "author": "Sean Koerner",
            "title": "NFL Player Props Week 4: Expert Picks for Jaylen Waddle, Terry McLaurin, More - The Action Network",
            "description": "Action Network NFL betting expert Sean Koerner breaks down his Week 4 player prop picks.",
            "url": "https://www.actionnetwork.com/nfl/nfl-player-props-week-4-picks",
            "urlToImage": "https://images.actionnetwork.com/blog/2023/09/waddle-1.jpg",
            "publishedAt": "2023-10-01T02:31:00Z",
            "content": "This post will be updated throughout the weekend with more of my NFL player props for Week 4, so be sure to check in periodically for the latest picks.\r\nRoschon Johnson\r\nOver 31.5 Rushing Yards (-110… [+7127 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Whitehouse.gov"
            },
            "author": "The White House",
            "title": "Statement from President Joe Biden on Passage of the Bipartisan Bill to Keep the Government Open - The White House",
            "description": "Tonight, bipartisan majorities in the House and Senate voted to keep the government open, preventing an unnecessary crisis that would have inflicted needless pain on millions of hardworking Americans. This bill ensures that active-duty troops will continue to…",
            "url": "https://www.whitehouse.gov/briefing-room/statements-releases/2023/09/30/statement-from-president-joe-biden-on-passage-of-the-bipartisan-bill-to-keep-the-government-open/",
            "urlToImage": "https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png",
            "publishedAt": "2023-10-01T01:13:25Z",
            "content": "Tonight, bipartisan majorities in the House and Senate voted to keep the government open, preventing an unnecessary crisis that would have inflicted needless pain on millions of hardworking Americans… [+1073 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Life Shopping Editors",
            "title": "Amazon's 100+ best Prime Day Early Access deals to shop this weekend - Yahoo Life",
            "description": "Embrace the season! Save big on everything from cozy Yankee Candles to spooky Halloween decor.",
            "url": "https://www.yahoo.com/lifestyle/amazon-prime-early-access-sale-093023-232737954.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-09/307c05a0-5e46-11ee-9bfe-b34bb89c1748",
            "publishedAt": "2023-09-30T23:27:42Z",
            "content": "Amazon's Prime Big Deal Days kicks off Oct. 10 hooray! But you can actually make out huge right now. The online retail giant has gifted us a slew of Early Access deals to pounce on, not to mention a … [+13285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Chicago Tribune"
            },
            "author": "Rick Pearson",
            "title": "US Rep. Mike Quigley only House Democrat 'no' vote on stopgap bill - Chicago Tribune",
            "description": "Quigley, co-chair of the bipartisan Congressional Ukraine Caucus, called the bill \"a victory for Putin and Putin-sympathizers.\"",
            "url": "https://www.chicagotribune.com/politics/ct-rep-quigley-long-house-vote-against-shutdown-bill-20230930-gf2fk5xnpzh6pacnua7tdyu2em-story.html",
            "urlToImage": "https://www.chicagotribune.com/resizer/AdcFtUEZnSo3EwomeDAWl5Y_BGE=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/NRVLNP373AGDWK3JV33TUIINFE.jpg",
            "publishedAt": "2023-09-30T23:22:00Z",
            "content": "U.S. Rep. Mike Quigley of Chicago was the only Democrat in the U.S. House to vote against an emergency funding plan aimed at averting a federal government shutdown, citing the bills lack of funding f… [+3002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PBS"
            },
            "author": null,
            "title": "What to know about prostate cancer screening and treatment - PBS NewsHour",
            "description": "Nearly 300,000 American men are expected to be diagnosed with prostate cancer this year alone, though most of those diagnosed don’t die from it. Ali Rogin speaks with Dr. Charles Ryan, a genitourinary oncologist and head of the Prostate Cancer Foundation, abo…",
            "url": "https://www.pbs.org/newshour/show/what-to-know-about-screening-diagnosis-and-treatment-for-prostate-cancer",
            "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/09/Prostate-1024x576.jpg",
            "publishedAt": "2023-09-30T21:35:19Z",
            "content": "Nearly 300,000 American men are expected to be diagnosed with prostate cancer this year alone, though most of those diagnosed dont die from it. Ali Rogin speaks with Dr. Charles Ryan, a genitourinary… [+150 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Constructor from News component");
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20,
            loading: 'false'
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5d7cd297fbb7438680f42c9c09d1f7ea&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5d7cd297fbb7438680f42c9c09d1f7ea&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }

    handleNextClick = async () => {
        console.log("Next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5d7cd297fbb7438680f42c9c09d1f7ea&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <h2>Top Headlines</h2>

                    <div className='row'>
                        {this.state.articles.map((e) => {
                            return <div className='col-md-4' key={e.url}>
                                <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button className='btn btn-dark' onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News