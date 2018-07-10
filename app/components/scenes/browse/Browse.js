import React, { Component } from "react";
import API from "../../../utils/query";
import DiceSpinner from "../children/DiceSpinner";
import styles from "./styles.less";

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
      displaySpinner: false
    };
  }

  componentDidMount = () => {
    this.search();
  };

  search = () => {
    console.log("searching...");
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
        history: history,
        displaySpinner: false
      });
    });
  };

  handleForward = e => {
    e.preventDefault();
    let history = this.state.history;
    if (history.currentCount === history.maxCount) {
      this.setState({ displaySpinner: true });
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
      <div className={styles.container}>
        <div className={styles.topColor}>
          <div />
        </div>
        <div className={styles.centerBox}>
          {this.state.displaySpinner ? (
            <DiceSpinner />
          ) : (
            <div>
              <button onClick={this.handleBackward}>Backwards</button>
              <img src={this.state.currentItem.image} />
              <button onClick={this.handleForward}>Forwards</button>
            </div>
          )}
        </div>
        <div className={styles.bottomColor}>
          <div />
        </div>
      </div>
    );
  };
}

export default Browse;
