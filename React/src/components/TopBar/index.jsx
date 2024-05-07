import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import {useParams, Link} from "react-router-dom";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar ({title}) {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
