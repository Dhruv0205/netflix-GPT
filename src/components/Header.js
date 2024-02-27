import React from "react";
import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, PROFILE } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. 
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/Browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);


  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-white z-10 flex justify-between">
      <img
        src = {LOGO}
        alt="logo"
        className="w-44 "
      />
 
   <div className="h-14 w-14 flex p-2 m-4">
        <img
          className="p-1 h-12 w-16"
          class="profile-icon"
          src= {PROFILE}
          alt="profile"
        />
        <button className="font-bold text-white" onClick={clickHandler}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;
