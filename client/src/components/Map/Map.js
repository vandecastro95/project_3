import React, { Component } from 'react';
import { VectorMap } from "react-jvectormap";
import './Map.css'

class Map extends Component {

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e, code) {
      this.props.mapClicked(code);
    }

    render () {
  return (
    <VectorMap
    map={"world_mill"}
    backgroundColor="#1b1b1b"
    zoomOnScroll={false}
    containerStyle={{
      width: "100%",
      height: "100vh"
    }}
    onRegionClick={this.handleClick}
    containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#009a9b",
          "fill-opacity": 1,
          stroke: "none",
          "stroke-width": 1,
          "stroke-opacity": 1
        },
        hover: {
            "fill": "#c3fdff",
          "fill-opacity": 1,
          cursor: 'pointer'
        },
        selected: {
          fill: '#ffff74'  //what colour clicked country will be
        },
        selectedHover: {
        }      
      }}
      regionsSelectableOne={true}
      series={{
        regions: [
          {
            // values: mapData,  //this is your data
            scale: ["#146804", "#ff0000"],  //your color game's here
            normalizeFunction: "polynomial"
          }
        ]
      }}
  />
  );
    }
}

export default Map;
