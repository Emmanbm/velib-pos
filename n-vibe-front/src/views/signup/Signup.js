import { Box, Card, CardContent } from "@mui/material";
import Inputs from "./Inputs";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Signup(){
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const [confirmer, setConfirmer] = useState('')

    return(
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            bgcolor: theme => theme.palette.info.main,
            display: "flex",
            flex: 1,
        }}>
            <Box 
                sx={{
                    px: 2,
                }}
                component={Card} 
                elevation={10}
            >
                <Header/>
                <CardContent>
                    <Inputs
                        setNom={setNom}
                        setPrenom={setPrenom}
                        setEmail={setEmail}
                        setMdp={setMdp}
                        setConfirmer={setConfirmer}
                        nom={nom}
                        prenom={prenom}
                        email={email}
                        mdp={mdp}
                        confirmer={confirmer}
                    />
                </CardContent>
                <Footer
                    nom={nom}
                    prenom={prenom}
                    email={email}
                    mdp={mdp}
                    confirmer={confirmer}
                />

            </Box>

        </Box>
    );
}
export default Signup;