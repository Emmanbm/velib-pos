import React, {} from "react";
import { Stack, TextField } from "@mui/material";

function Inputs ({username, setUsername, password, setPassword}) {
    const handleChangeUsername = event => {
        setUsername(event.target.value?.trim())
    }

    const handleChangePassword = event => {
        setPassword(event.target.value?.trim())
    }

    return(
        <Stack spacing={1}>
            <TextField
                onChange={handleChangeUsername}
                value={username}
                label="Email ou nom d'utilisateur"
                type="email"    
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off" 
            />
            <TextField
                onChange={handleChangePassword}
                value={password}
                label="Mot de passe"
                type="password"    
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off"            
            />
        </Stack>
    );
}
export default Inputs;