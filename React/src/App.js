import './App.css';

import React, { useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

import {useParams, Link} from "react-router-dom";


const App = (props) => {
  const [title, setTitle] = useState("CLick to userDetail")
  const changeTille = (value) => {
    setTitle(value)
  }
  return (
      <Router>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopBar title = {title}/>
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper className="main-grid-item">
                <UserList />
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper className="main-grid-item">
                <Routes>
                  <Route
                      path="/users/:userId"
                      element = {<UserDetail onChange = {changeTille}/>}
                  />
                  <Route
                      path="/photos/:userId"
                      element = {<UserPhotos onChange = {changeTille}/>}
                  />
                  <Route path="/users" element={<UserList />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
  );
}

export default App;
