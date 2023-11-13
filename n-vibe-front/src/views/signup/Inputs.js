import React, {} from "react";
import { Stack, TextField } from "@mui/material";


function Inputs ({nom, setNom, prenom, setPrenom, email, setEmail,
    mdp, setMdp, confirmer, setConfirmer}) {
        const handleChange = setState => event => {
            const {value} = event.target;
            setState(value);
        }
    return(
        <Stack spacing={1}>
            <TextField
                label="Nom"
                type="text" 
                onChange={handleChange(setNom)}   
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off" 
            />
            <TextField
                label="Prénom"
                type="text"
                onChange={handleChange(setPrenom)}    
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off" 
            />
            <TextField
                label="Email"
                type="email"
                onChange={handleChange(setEmail)}    
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off" 
            />
            <>
            <TextField
                label="Mot de passe"
                type="password"
                onChange={handleChange(setMdp)}     
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off"            
            />
            <TextField
                label="Confirmez votre mot de passe"
                type="password"
                onChange={handleChange(setConfirmer)}    
                fullWidth
                variant="outlined"
                inputProps={{
                    "aria-autocomplete":"none"
                }}
                autoComplete="off"            
            />        
        </>
        </Stack>
    );
}
export default Inputs;