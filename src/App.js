import Counter from "./components/Counter";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
