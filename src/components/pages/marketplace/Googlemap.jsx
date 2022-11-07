import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <div
        style={{ position: "relative", right: 13 }}
        className="property-details-google-map mb-60 google-map mb-120 col-lg- col-sm-5 col-md-12"
      >
        <Map
          style={{ height: 500 }}
          // width="100%"
          // height="100%"
          google={this.props.google}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.long,
          }}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAxqXo9hczr24uImbeyo4tssX_5jdYte48",
})(MapContainer);
