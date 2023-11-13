import { CardHeader, Typography } from "@mui/material";


function Header () {
    return(
        <CardHeader 
            subheader={
                <Typography variant="h6">
                    Inscription
                </Typography>
            }
        />
    );
}
export default Header;