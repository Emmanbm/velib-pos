import useAxios from "axios-hooks";
import { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import veloIcon from "./veloIcon";
import urlServer from "../../utils/urlServer";
import { Session } from "../../App";
import { Backdrop, CircularProgress, Box, Typography, Button } from "@mui/material";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const  MapCard = ({position, positions}) => {
  return (
    <MapContainer style={{height:"500px"}} center={position} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Ma position actuelle
      </Popup>
    </Marker>
    {
      positions?.map((pos, index) => (
        <Marker
          key={index}
          position={pos['geo']}
          icon={veloIcon}
        >
          <Popup>
                <Typography>
                  Nom de la station:{pos['Nom de la station']}
                </Typography>
                <Typography>
                  Nombre de bornes disponibles:{pos['Nombre de bornes disponibles']}
                </Typography>
          </Popup>
        </Marker>
      ))
    }

  </MapContainer>
  )
}

export default function Geolocation () {
  const [{token}] = useContext(Session);
  const [userPosition, setUserPosition] = useState(null);
  const [{loading, data}, refresh] = useAxios({
    method:'get',
    headers:{
      Authorization: `Bearer ${token}`
  }},
  {
    manual:true
  }
  );

  const handleGetUserPosition = () => {
    window.navigator.geolocation.getCurrentPosition( position => {
      const {coords} = position;
      setUserPosition([coords.latitude, coords.longitude])
      const url = urlServer(`/auth/positions?position=${coords.latitude},${coords.longitude}`);
      refresh(url);
    })
  }

  return(
  userPosition && data ?
    <MapCard
      position={userPosition}
      positions={data}
    />
    :
    <Box
      sx={{
        minheight:500,
        width:"100%"
      }}
    >
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!!loading}
      >
        <CircularProgress color="inherit" size={50}/>
        <Typography
          color='inherit'
          align='center'
        >
          Chargement...
        </Typography>
      </Backdrop>
      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:'80vh'
        }}
      >
        <Box>
          <Button
            startIcon={<MyLocationIcon/>}
            variant='contained'
            sx={{
              textTransform:"none"
            }}
            onClick={handleGetUserPosition}
          >
            Autorisez l'application à accéder à votre position.
          </Button>
        </Box>
      </Box>
    </Box>
)
}