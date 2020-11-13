import React from "react";
import MapViewDirections from "react-native-maps-directions";
import { theme } from '../core/theme';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCJAXdG35oEvZKGnl79517yTPEMMIDO6Cw"
    strokeWidth={3}
    strokeColor={theme.colors.primary}
  />
);

export default Directions;
