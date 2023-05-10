import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { store } from "../Redux/store";
import { ProductList } from "../Components/ProductList";
import { SideBar } from "../Components/SideBar";
import styled from "styled-components";
import { SlMagnifier } from "react-icons/sl";
import { useSearchParams } from "react-router-dom";
import { GetProducts } from "../Redux/Products/action";

export const HomePage = () => {
  const [SearchParams, SetSearchParams] = useSearchParams();
  const initialCfields = SearchParams.get("creativeFields");
  const [creativeFields, setCreativeFields] = useState(initialCfields || "");
  const initialTools = SearchParams.get("tools");
  const [tools, setTools] = useState(initialTools || "");
  const initialLocation = SearchParams.get("location");
  const [location, setLocation] = useState(initialLocation || "");
  const initialSchool = SearchParams.get("school");
  const [school, setSchool] = useState(initialSchool || "");
  const initialAssets = SearchParams.get("assets");
  const [assets, setAssets] = useState(initialAssets || "");
  const initalSubs = SearchParams.get("subscription");
  const [subscription, setSubscription] = useState(initalSubs || "");
  const initialLikes = SearchParams.get("likes");
  const [likes, setLikes] = useState(initialLikes || "");

  useEffect(() => {
    let params = {};
    creativeFields && (params.creativeFields = creativeFields);
    tools && (params.tools = tools);
    location && (params.location = location);
    school && (params.school = school);
    assets && (params.assets = assets);
    subscription && (params.subscription = subscription);
    likes && (params.likes = likes);
    SetSearchParams(params);
  }, [creativeFields, tools, location, school, assets, subscription, likes]);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  let obj = {
    params: {
      q: search,
    },
  };

  useEffect(() => {
    dispatch(GetProducts(obj));
  }, [search]);

  return (
    <DIV>
      <HomeDiv>
        <div style={{ width: "52%" }}>
          <SlMagnifier />
          <input
            type="text"
            placeholder="Search the creative world at work"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="btn">
          <button className="projects">Projects</button>
          <button className="button">Assets</button>
          <button className="button">Image</button>
          <button className="button">Prototypes</button>
          <button className="button">Streams</button>
          <button className="button">People</button>
          <button className="button">Moodboards</button>
        </div>
      </HomeDiv>
      <SortDiv>
        <div style={{ width: "60%" }}>
          <select
            className="select"
            name="creativeFields"
            onChange={(e) => setCreativeFields(e.target.value)}
            value={creativeFields}
          >
            <option value="">Creative Fields</option>
            <option value="Architecture">Architecture</option>
            <option value="ArtDirection">Art Direction</option>
            <option value="Branding">Branding</option>
            <option value="Fashion">Fashion</option>
            <option value="GraphicDesign">Graphic Design</option>
          </select>
          <select
            className="select"
            name="tools"
            onChange={(e) => setTools(e.target.value)}
            value={tools}
          >
            <option value="">Tools</option>
            <option value="AdobePhotoshop">Adobe Photoshop</option>
            <option value="AdobeIllustrator">Adobe Illustrator</option>
            <option value="AdobeInDesign">Adobe InDesign</option>
            <option value="AdobeAfterEffects">Adobe After Effects</option>
            <option value="AdobePhotoshopLightroom">
              Adobe Photoshop Lightroom
            </option>
          </select>
          <select
            className="select"
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option value="">Location</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Russia">Russia</option>
            <option value="China">China</option>
            <option value="Nepal">Nepal</option>
          </select>
          <select
            className="select"
            name="school"
            onChange={(e) => setSchool(e.target.value)}
            value={school}
          >
            <option value="">School</option>
            <option value="iit">IIT</option>
            <option value="bseb">BSEB</option>
            <option value="cbse">CBSE</option>
            <option value="nit">NIT</option>
            <option value="abroad">Abroad</option>
          </select>
          <select
            className="select"
            name="assets"
            onChange={(e) => setAssets(e.target.value)}
            value={assets}
          >
            <option value="">Assets</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Subscrption">Subscription</option>
          </select>
          <select
            className="select"
            name="subscriptions"
            onChange={(e) => setSubscription(e.target.value)}
            value={subscription}
          >
            <option value="">Subscriptions</option>
            <option value="Free">Free</option>
            <option value="PremiumProjects">Premium Projects</option>
          </select>
        </div>
        <div className="sorting" style={{ paddingBottom: "10px" }}>
          <p>Sort</p>
          <select
            name="recommended"
            onChange={(e) => setLikes(e.target.value)}
            value={likes}
          >
            <option value="">Recommended</option>
            <option value="desc">Most Likes</option>
            <option value="asc">Least Likes</option>
            <option value="MostViewed">Most Viewed</option>
            <option value="LeastViewed">Least Viewed</option>
          </select>
        </div>
      </SortDiv>
      <ProductList />
      <div className="sidebar">
        <SideBar />
      </div>
    </DIV>
  );
};

const SortDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin: 0px;
  }

  p {
    color: #a06771;
    font-weight: 600;
  }

  .sorting {
    margin-left: 30%;
    line-height: 5px;
    align-items: flex-start;
  }
  .sorting select {
    color: #8c5d5d;
    font-weight: 700;
    border: 0;
  }

  .select {
    margin: 10px;
    height: 35px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: white;
    color: #1d1b1b;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    width: fit-content;
    word-break: break-word;
  }
`;

const HomeDiv = styled.div`
  width: 96%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  padding: 0 20px 0 20px;
  border-radius: 120px;
  background-color: whitesmoke;
  color: black;
  border: 1px solid pink;
  margin: 25px 5px;

  .button {
    border-radius: 999px;
    //box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    background-color: whitesmoke;
    color: #3e3636;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 17px;
    padding: 8px 18px;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }

  .button:hover {
    background-color: white;
  }

  .projects {
    background: #25252b;
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
    line-height: 17px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 12px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }

  .btn {
    display: flex;
    flex-direction: row;
    align-content: space-evenly;
    gap: 10px;
  }
  #search {
    height: 50px;
    width: 90%;
    border: none;
    background-color: whitesmoke;
    font-family: "Montserrat Alternates", sans-serif;
    padding: 0 8px 0 8px;
    font-size: 1.32em;
    font-weight: 700;
    letter-spacing: -0.015em;
    outline: none;
  }
`;

const DIV = styled.div`
  width: 98%;
`;
