import { CardHeader, Typography } from "@mui/material";



function Header () {
    return(
        <CardHeader 
            subheader={
                <>
                    <Typography variant="h6">
                        Connexion
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Bienvenue sur le site de Velib!
                    </Typography>
                </>
                
            }
        />
    );
}
export default Header;