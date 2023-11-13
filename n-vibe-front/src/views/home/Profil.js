import { useEffect, useContext } from "react";
import urlServer from "../../utils/urlServer";
import { Session } from "../../App";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import useAxios from "axios-hooks";

export default function Profil ({open, setOpen}) {
    const url = urlServer(`/auth/profil`);
    const [{token}] = useContext(Session);
    const [{data}, refresh] = useAxios({
        url,
        method:'get',
        headers:{
            Authorization: `Bearer ${token}`
        }},
        {
            manual:true
    }
    );
    useEffect(() => {
        refresh()
    }, [])
    console.log(data)
    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
        >
        <Box
            sx={{
                width:300
            }}
        >
            <List>
                {
                    data?.user && Object.keys(data.user).map((item, key) => (
                        <ListItem
                            key={key}
                        >
                            <ListItemText
                                primary={data.user[item]}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
      </Drawer>
    
    )

    }