import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Binay",
      image:
        "https://www.pinclipart.com/picdir/middle/167-1677865_facebook-button-image-facebook-small-icon-png-clipart.png",
      place: 1,
    },
    {
      id: "u2",
      name: "Roshan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Guy_Pearce_Cannes_2012.jpg",
      place: 4,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
