import React, { createContext, useState } from 'react';
import Login from './views/login/Login';
import NotFound from './views/NotFound';
import Home from './views/home/Home';
import { Box } from '@mui/material';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import Signup from './views/signup/Signup';
import userSession from './utils/userSession';

export const Session = createContext(null);
const Provider = Session.Provider;

function App () {
  const [values, setValues] = useState(userSession());
  const isAuth = !!values 
  return (
    <Provider value={[values, setValues]}>
      <Box sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flex: 1,
      }}>
        <BrowserRouter>
          <Switch>
          {isAuth ?
            <Route 
              path="/"
              element={<Home/>}
          />:
            <>
              <Route 
                path="/login"
                element={<Login/>}
              />
              <Route 
                path="/signup"
                element={<Signup/>}
              />
              <Route 
                path="/"
                element={<Navigate to="/login"/>}
              />              
            </>
            }
            <Route 
              path="*"
              element={<NotFound/>}
            />
          </Switch>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
