import { Avatar, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from '@mui/icons-material/List';
import React from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full px-3 py-3 bg-[#1976D2] flex rounded">
        <div className="w-1/4 justify-center flex items-center">
        <Typography
          variant="h3"
          sx={{
            display: {
              sm: "block",
              xs: "none",
            },
            color: "white",
            fontSize:"30px"
          }}
        >
          E-learning
        </Typography>
        <ListIcon sx={{ display: {
              sm: "none",
              xs: "block",
            },color:"white", fontSize:"3rem"}}/>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="searchBox w-4/5 bg-white rounded-[21px] flex flex-row">
            {/* Search Input at here */}
            <InputBase
              sx={{ ml: 2, flex: 1 , justifyContent: "center"}}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            {/* icon button at here */}
            <IconButton type="button" sx={{ p:{sm: "10px" ,xs: "2px"}, height:"auto" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
            <div className="account-button flex justify-around items-center  w-1/2 cursor-pointer">
                <p className="text-white text-xl">Quang Duy</p>
                <Avatar sx={{ bgcolor: 'white' ,color: '#1976D2'}}>D</Avatar>
            </div>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/4 menu-wrapper"></div>
        <div className="w-1/2">{children}</div>
        <div className="w-1/4 noti-wrapper"></div>
      </div>
    </>
  );
};

export default Navbar;
