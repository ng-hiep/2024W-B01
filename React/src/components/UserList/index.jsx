import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  // const users = models.userListModel();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://3y4qxq-8081.csb.app/api/user/list");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Typography variant="body1">
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a> and{" "}
        <a href="https://mui.com/components/dividers/">Dividers</a> to display
        your users like so:
      </Typography>
      <List component="nav">
        {users && Array.isArray(users) && users.map((item, index) => (
          <div key={index}> {/* Assigning index as key, consider using a unique identifier if available */}
            <Link to={`users/${item._id}`} style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemText primary={item?.first_name || item?.last_name} />
              </ListItem>
            </Link>
            <Divider />
          </div>
        ))}
      </List>

      <Typography variant="body1">
        The model comes in from models.userListModel()
      </Typography>
    </div>
  );
}

export default UserList;
