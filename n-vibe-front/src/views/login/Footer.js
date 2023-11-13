import React, { useContext } from 'react';
import { CardActions, Link, Stack, Typography, Alert } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import useAxios from "axios-hooks";
import urlServer from "../../utils/urlServer";
import userSession from "../../utils/userSession";
import { Session } from '../../App';
import { useNavigate } from 'react-router-dom';

function Footer ({username, password}) {

    const url = urlServer('/api/login')
    const [{loading, error}, refresh] = useAxios(url, {manual:true})
    const [, setValues] = useContext(Session)
    const navigateTo = useNavigate();

    const HandleClick = event => {
        event.preventDefault();
        refresh({
            method: "post",
            data: {
                email: username,
                mdp: password
            }
        }).then(result => {
            const {data} = result;
            userSession(data);
            setValues(data);
            navigateTo('/');
        })
    }

    return(
        <CardActions>
            <Stack spacing={1}>
                {error && 
                <Alert severity='error'>
                    {error.response.data?.message|| "Impossible de se connecter"}
                </Alert>}
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    disabled={!(username&&password)}
                    onClick={HandleClick}
                >
                    Se connecter
                </LoadingButton>
                <Typography
                    variant="body2"
                >
                    Vous n'avez pas de compte ?
                    <Link
                        component={LinkRouter}
                        to="/signup"
                        sx={{textDecoration:"none", mx:1}}
                    > 
                        Créer un compte
                    </Link>
                </Typography>
            </Stack>
        </CardActions>
    );
}
export default Footer;