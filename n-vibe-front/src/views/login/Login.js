import { Box, Card, CardContent } from "@mui/material";
import Inputs from "./Inputs";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";



function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log(username, password)

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
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                    />
                </CardContent>
                <Footer
                    username={username}
                    password={password}
                />

            </Box>

        </Box>
    );
}
export default Login;