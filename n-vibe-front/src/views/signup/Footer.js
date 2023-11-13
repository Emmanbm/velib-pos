import { LoadingButton } from "@mui/lab";
import { Alert,  CardActions, Link, Stack, Typography } from "@mui/material";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";
import urlServer from "../../utils/urlServer";

function Footer ({nom, prenom, email, mdp, confirmer}) {
    const disabled = nom && prenom && email && mdp && (confirmer === mdp);

    const url = urlServer('/api/signup')
    const [{loading, error}, refresh] = useAxios(url, {manual:true})
    const navigateTo = useNavigate();

    const HandleClick = event => {
        event.preventDefault();
        refresh({
            method: "post",
            data: {
                nom,
                prenom,
                email,
                mdp
            }
        }).then(result => {
            navigateTo('/login');
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
                    onClick={HandleClick}
                    disabled={!disabled}
                    variant="contained"
                    loading={loading}
                >
                    S'inscrire
                </LoadingButton>
                <Typography
                    variant="body2"
                >
                    Vous avez déjà compte ?
                    <Link
                        component={LinkRouter}
                        to="/login"
                        sx={{textDecoration:"none", mx:1}}
                    > 
                        Se connecter
                    </Link>
                </Typography>
            </Stack>
        </CardActions>
    );
}
export default Footer;