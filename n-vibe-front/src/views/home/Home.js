import {
    Avatar,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Tooltip,
    Button} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useContext, useState } from 'react';
import Geolocation from './Geolocation';
import { Session } from '../../App';
import { deleteSession } from '../../utils/userSession';
import Profil from './Profil';

export default function Home() {
    const [open, setOpen] = useState(false);
    const [, setValues] = useContext(Session);
    
    return(
        <>
            <Box sx={{height:"100vh", width: "100vw"}}>
                <AppBar position="relative" color="default">
                <Toolbar>
                    <Avatar>

                    </Avatar>
                    <Typography variant="h6" sx={{flexGrow:1, ml:1}}>
                        Bornes Velib
                    </Typography>
                    <Tooltip title="Profil">
                        <IconButton
                            onClick={() => setOpen(!open)}
                            sx={{mx:1}}
                        >
                            <ManageAccountsIcon/>
                        </IconButton>
                    </Tooltip>
                    <Button variant="contained" onClick={() => {
                        deleteSession();
                        setValues(null);
                    }}>
                        Déconnexion
                    </Button>
                </Toolbar>
                </AppBar>
                <Box sx={{height:500, width:"100%"}}>
                    <Geolocation/>
                </Box>
            </Box>
            <Profil
              open={open}
              setOpen={setOpen}
              
            />
        </>
    );
}