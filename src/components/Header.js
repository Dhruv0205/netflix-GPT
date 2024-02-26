import React from "react";
import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

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
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44 "
      />
 
   <div className="h-14 w-14 flex p-2 m-4">
        <img
          className="p-1 h-12 w-16"
          class="profile-icon"
          src="https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYh1GXyzHI-IqH5gUm3DHnqwmPCTLO5rmui76NzrDHgzMA7or4fZQUjLBsrXzx0JiwagUlQSf7Wiu4yI-A4hfpwleGn8R3g.png?r=54d"
          alt=""
        />
        <button className="font-bold" onClick={clickHandler}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;
