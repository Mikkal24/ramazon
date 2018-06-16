import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexArray: [
        { name: "Appliances", selected: false },
        { name: "ArtsAndCrafts", selected: false },
        { name: "Automotive", selected: false },
        { name: "Baby", selected: false },
        { name: "Beauty", selected: false },
        { name: "Books", selected: false },
        { name: "Collectibles", selected: false },
        { name: "Electronics", selected: false },
        { name: "Fashion", selected: false },
        //{name:'Handmade', selected: false},
        { name: "HealthPersonalCare", selected: false },
        { name: "HomeGarden", selected: false },
        { name: "Industrial", selected: false },
        { name: "LawnAndGarden", selected: false },
        { name: "Luggage", selected: false },
        { name: "Magazines", selected: false },
        //{name:'MobileApps', selected: false},
        { name: "Movies", selected: false },
        { name: "Music", selected: false },
        { name: "MusicalInstruments", selected: false },
        { name: "OfficeProducts", selected: false },
        { name: "Pantry", selected: false },
        { name: "PCHardware", selected: false },
        { name: "PetSupplies", selected: false },
        { name: "Software", selected: false },
        { name: "SportingGoods", selected: false },
        { name: "Tools", selected: false },
        { name: "Toys", selected: false },
        //{name:'UnboxVideo', selected: false},
        { name: "VideoGames", selected: false },
        { name: "Wine", selected: false },
        { name: "Wireless", selected: false }
      ]
    };
  }

  render = () => {
    const checkBoxes = this.state.indexArray.map(category => {
      return (
        <div>
          <input type="checkbox" id={category.name} />
          <label htmlFor={category.name}>{category.name}</label>
        </div>
      );
    });
    return (
      <div>
        {checkBoxes}
        <Link to="/purchase/shipping">
          <a href="#">Next</a>
        </Link>
      </div>
    );
  };
}

export default SelectCategories;
