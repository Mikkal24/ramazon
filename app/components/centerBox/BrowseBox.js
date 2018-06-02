import React, { Component } from "react";
import query from "../../utils/query";

class BrowseBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      description: "",
      price: "",
      url: "",
      currentCount: 0,
      maxCount: 0,
      pastSearches: [],
      showLeftArrow: false,
      displaySpinner: true
    };
  }

  componentDidMount = () => {
    this.search();
  };

  componentDidUpdate = () => {
    this.renderBrowseContainer();
  };

  search = () => {
    this.setState({ displaySpinner: true });
    if (this.state.maxCount === this.state.currentCount) {
      this.renderSpinner();
      query.getOneRandom().then(response => {
        var image = response.data[0].LargeImage
          ? response.data[0].LargeImage.URL
          : "./assets/defaultImage.png";
        var url = response.data[0].DetailPageURL;
        var lowestOffer = response.data[0].OfferSummary.LowestNewPrice
          ? "(" +
            response.data[0].OfferSummary.LowestNewPrice.FormattedPrice +
            ")"
          : "(no new offers)";
        var title = response.data[0].ItemAttributes.Title;
        var pastSearches = this.state.pastSearches;
        var currentCount = this.state.currentCount + 1;
        var maxCount = this.state.maxCount + 1;
        var leftArrowStatus = currentCount > 1 ? true : false;
        pastSearches.push(response);
        this.setState({
          pastSearches: pastSearches,
          image: image,
          url: url,
          price: lowestOffer,
          title: title,
          currentCount: currentCount,
          maxCount: maxCount,
          showLeftArrow: leftArrowStatus,
          displaySpinner: false
        });
      });
    } else {
      this.goForward();
    }
  };

  goBack = () => {
    var currentCount = this.state.currentCount - 1;

    var response = this.state.pastSearches[currentCount - 1];
    var image = response.data[0].LargeImage
      ? response.data[0].LargeImage.URL
      : "./assets/defaultImage.png";
    var url = response.data[0].DetailPageURL;
    var lowestOffer = response.data[0].OfferSummary.LowestNewPrice
      ? "(" + response.data[0].OfferSummary.LowestNewPrice.FormattedPrice + ")"
      : "(no new offers)";
    var title = response.data[0].ItemAttributes.Title;
    var leftArrowStatus = currentCount > 1 ? true : false;

    this.setState({
      image: image,
      url: url,
      price: lowestOffer,
      title: title,
      currentCount: currentCount,
      showLeftArrow: leftArrowStatus
    });
  };

  goForward = () => {
    var currentCount = this.state.currentCount + 1;

    var response = this.state.pastSearches[currentCount - 1];
    var image = response.data[0].LargeImage
      ? response.data[0].LargeImage.URL
      : "./assets/defaultImage.png";
    var url = response.data[0].DetailPageURL;
    var lowestOffer = response.data[0].OfferSummary.LowestNewPrice
      ? "(" + response.data[0].OfferSummary.LowestNewPrice.FormattedPrice + ")"
      : "(no new offers)";
    var title = response.data[0].ItemAttributes.Title;
    var leftArrowStatus = currentCount > 1 ? true : false;

    this.setState({
      image: image,
      url: url,
      price: lowestOffer,
      title: title,
      currentCount: currentCount,
      showLeftArrow: leftArrowStatus
    });
  };

  renderSpinner = () => {
    return (
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    );
  };

  renderBrowseContainer = () => {
    return (
      <div>
        <a href={this.state.url} target="_blank">
          <img
            onload={this.resizeImage}
            id="browseImg"
            className="browseImg"
            src={this.state.image}
          />
        </a>
        <h5>{this.state.title}</h5>
        <h5>{this.state.price}</h5>
      </div>
    );
  };

  resizeImage = () => {
    var img = $("#browseImg");
    if (img.height > img.width) {
      img.height = "100%";
      img.width = "auto";
    }
  };

  render = () => {
    return (
      <div className="centerThis arrowContainer">
        {this.state.showLeftArrow ? (
          <div id="hideThis" className="arrowDiv">
            <a className="arrowAnchor" href="#">
              <span className="leftArrow" onClick={this.goBack} />
            </a>
          </div>
        ) : null}
        <div id="displayContainer">
          {this.state.displaySpinner
            ? this.renderSpinner()
            : this.renderBrowseContainer()}
        </div>
        <div className="arrowDiv">
          <a className="arrowAnchor" href="#">
            <span className="rightArrow" onClick={this.search} />
          </a>
        </div>
      </div>
    );
  };
}

export default BrowseBox;
