import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SlBell, SlMagnifier } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { GetProducts } from "../Redux/Products/action";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  let obj = {
    params: {
      q: query,
    },
  };

  useEffect(() => {
    dispatch(GetProducts(obj));
  }, [query]);

  return (
    <DIV>
      <Behance>
        <Link className="blink" to={"/"}>
          Behance
        </Link>
        <Link className="link" to={"/foryou"}>
          For You
        </Link>
        <Link className="link" to={"/discover"}>
          Discover
        </Link>
        <Link className="link" to={"/live"}>
          Live
        </Link>
        <Link className="link" to={"/hire"}>
          Hire
        </Link>
        <Link className="link" to={"/jobs"}>
          Jobs
        </Link>
      </Behance>

      <div className="sbox" style={{ width: "40%" }}>
        <SlMagnifier />
        <input
          type="text"
          placeholder="Search..."
          id="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Sdiv>
        <div style={{ marginTop: "8px" }}>
          <SlBell />
        </div>
        <Link className="login" to={"/userLogin"}>
          <button className="log">Log in</button>
        </Link>
        <Link className="signup" to={"/signup"}>
          <button className="sign">Sign Up</button>
        </Link>
        <Link className="link" to={"/admin"}>
          <button className="admin">Admin</button>
        </Link>
      </Sdiv>

      {/* <Link className="link" to={"/edit/:id"}>
        EditPage
      </Link> */}
      {/* <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      /> */}
    </DIV>
  );
};

const Sdiv = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;
  //border: 1px solid black;

  .login {
    text-decoration: none;
  }
  .admin {
    margin-left: 70px;
    background: #643838;
    border-radius: 999px;
    //box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #f4f4f7;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }

  .log {
    background: whitesmoke;
    border-radius: 999px;
    //box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #5e5df0;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }
  .log:hover {
    background-color: #d1c7c7;
  }

  .sign {
    background: #484896;
    border-radius: 999px;
    //box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }
  .sign:hover {
    background-color: #3030cc;
  }
`;

const Behance = styled.div`
  width: 33%;
  display: flex;
  gap: 20px;
  //border: 1px solid black;

  .blink {
    color: black;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
  }
  .link {
    color: #191919;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 5px;
    font-weight: 600;
  }
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  align-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  height: 60px;

  .sbox {
    border-radius: 120px;
    background-color: whitesmoke;
    color: black;
    border: 1px solid pink;
    margin: 20px;
  }

  #search {
    width: 85%;
    height: 35px;
    border: none;
    background-color: whitesmoke;
    font-family: "Montserrat Alternates", sans-serif;
    padding: 0 8px 0 8px;
    font-size: 1.12em;
    font-weight: 400;
    letter-spacing: -0.015em;
    outline: none;
  }
`;
