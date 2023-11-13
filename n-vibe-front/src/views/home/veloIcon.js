import L from 'leaflet';

const veloIcon = L.icon({
  iconUrl: require('../../assets/icons_velib.png'),
  iconSize: [48,48],
  iconAnchor: [22, 48]
  // popupAnchor: null,
  // shadowUrl: null,
  // shadowSize: null,
  // shadowAnchor: null
});

export default veloIcon;