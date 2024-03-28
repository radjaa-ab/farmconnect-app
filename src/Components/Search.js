import React, { useContext, useState } from "react";


const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
        <span>User not found!</span>
        <div className="userChat" >
          <img alt="" />
          <div className="userChatInfo">
            <span>Name</span>
          </div>
        </div>
    </div>
  );
};

export default Search;