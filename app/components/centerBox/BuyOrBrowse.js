import React, { Component } from 'react';

var quoteList = [
	"Buy a little surprise for yourself or for the birthday of that one guy you don't know anything about",
	"No good ideas? We've got you covered",
	"Don't know what to get for Secret Santa? Sorry, neither do we",
	"Sure there are other ways to spend money but, they're all so... what's the word? Predictable",
	"Going on a date? Break the ice with <a href='https://www.amazon.com/super1798-Creative-Flesh-Colored-Belly/dp/B075XCF76Q?SubscriptionId=AKIAIR3WJ4VCLLYEGLLQ&tag=atchotes-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B075XGX138&th=1' target='_blank'>this!</a> Actually... maybe not that...",
	"Jeff Bezos is our main man.    ...Whether he likes it or not.",
	"At least that 64 pck of toilet paper is more usefull than some anime stickers...",
	"A critical failure can be more fun than a critical success with the right mindset",
	"¯\\_(ツ)_/¯",
	"You know you want something",
	"For when youre not sure what you want",
	"A surprise in every box ",
	"Loot crate with irl Loot ",
	"Discover a new dream",
	"unlock a hidden talent",
	"find your next passion",
	"not another god damn_____",
	"show off to your neighbors with your new",
	"all the fun of gift giving/none of the stress of picking the wrong thign",
	"big surprises come in small packages"
]

class BuyOrBrowse extends Component{

	componentDidMount(){
		console.log(this.props.route);
		this.props.route.setBackground();
		var randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)];
		console.log(randomQuote);
		$("#quoteBox").html(randomQuote);
	},

	componentWillUnmount(){
		this.props.route.removeBackground();
	},
	render(){
		return(
			<div>
				<div className="row">
				<div className="buyOrBrowseBox button-row">
					<div><a href="/buy" rel="nofollow" rel="noreferrer" content="Buy"></a></div>
					<br></br>
    				<div><a href="/browse" rel="nofollow" rel="noreferrer" content="Browse"></a></div>
				</div>		
				</div>
				<p><i id="quoteBox"></i></p>
			</div>

			)
	}
};

module.exports = BuyOrBrowse;