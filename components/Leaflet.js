import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, GeoJson } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

var Leaflet = React.createClass({
  render: function() {
    const style = {
      minHeight: "800px", width: "100%"
    };
    let tileLayers = _.map(this.props.url, u => {
      return <TileLayer url={u} />;
    });

    let vectorLayers = [];
    if(this.props.maxState) {
      vectorLayers.push(<GeoJson data={this.props.maxState} />);
    }

    if(this.props.maxAverageState) {
      vectorLayers.push(<GeoJson data={this.props.maxAverageState} />);
    }

    return (
      <Map center ={[37.062,-121.530]} zoom={8} style={style} bounds={this.props.bounds}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
        />
        {tileLayers}
        {vectorLayers}
      </Map>
    );
  }
});

module.exports = Leaflet;
