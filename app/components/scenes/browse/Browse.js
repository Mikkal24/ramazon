import React, { Component } from "react";
import API from "../../../utils/query";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        image: "",
        title: "",
        price: "",
        url: ""
      },
      history: {
        currentCount: 0,
        maxCount: 0,
        pastSearches: [],
        showBackArrow: false
      },
      displaySpinner: true
    };
  }

  componentDidMount = () => {
    console.log("browse mounted");
    this.search();
  };

  search = () => {
    API.getOneRandom().then(res => {
      console.log(res);
      let data = res.data[0];
      let currentItem = {};
      currentItem.image = data.LargeImage
        ? data.LargeImage.URL
        : "./assets/defaultImage.png";
      currentItem.lowestOffer = data.OfferSummary.LowestNewPrice
        ? `(${data.OfferSummary.LowestNewPrice.FormattedPrice})`
        : "(no new offers)";
      currentItem.url = data.DetailPageURL;
      currentItem.title = data.ItemAttributes.Title;

      let history = {};
      history.pastSearches = this.state.history.pastSearches.concat(
        currentItem
      );
      history.currentCount = history.pastSearches.length;
      history.maxCount = history.pastSearches.length;
      history.showBackArrow = true;

      this.setState({
        currentItem: currentItem,
        history: history
      });
    });
  };

  handleForward = e => {
    e.preventDefault();
    let history = this.state.history;
    if (history.currentCount === history.maxCount) {
      this.search();
    } else {
      history.currentCount++;
      this.setState({
        currentItem: history.pastSearches[history.currentCount - 1],
        history: history
      });
    }
  };

  handleBackward = e => {
    e.preventDefault();
    let history = this.state.history;
    if (history.currentCount > 1) {
      history.currentCount--;
      this.setState({
        currentItem: history.pastSearches[history.currentCount - 1],
        history: history
      });
    }
  };

  render = () => {
    return (
      <div>
        <button onClick={this.handleBackward}>Backwards</button>
        <img src={this.state.currentItem.image} />
        <button onClick={this.handleForward}>Forwards</button>
      </div>
    );
  };
}

export default Browse;
