import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [searchOuery, setSearchOuery] = useState("");
  const navigate = useNavigate;
  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchOuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={searchOuery}
        onChange={({ target }) => setSearchOuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
