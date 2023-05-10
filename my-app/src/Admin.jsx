import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AddPost } from "./Redux/Products/action";

export const Admin = () => {
  const initialState = {
    image: "",
    pName: "",
    pOwner: "",
    likes: "",
    views: "",
    creativeFields: "",
    tools: "",
    location: "",
    school: "",
    assets: "",
    subscriptions: "",
  };
  const [Post, setPost] = useState(initialState);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: (name === "likes") | (name === "views") ? +value : value,
      };
    });
  };

  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(AddPost(Post)).then(() => {
      setPost(initialState);
    });
  };

  return (
    <DIV>
      <h1>Add Post</h1>
      <form onSubmit={handelSubmit}>
        {/* <input
          value={Products.name}
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={(e) => handelChange(e)}
        /> */}
        <input
          type="text"
          name="image"
          placeholder="Post Image"
          onChange={(e) => handelChange(e)}
          value={Post.image}
        />
        <input
          type="text"
          name="pName"
          placeholder="Post Name"
          onChange={(e) => handelChange(e)}
          value={Post.pName}
        />
        <input
          type="text"
          name="pOwner"
          placeholder="Post Owner"
          onChange={(e) => handelChange(e)}
          value={Post.pOwner}
        />
        <input
          type="number"
          name="likes"
          placeholder="Post Likes"
          onChange={(e) => handelChange(e)}
          value={Post.likes}
        />
        <input
          type="number"
          name="views"
          placeholder="Post Views"
          onChange={(e) => handelChange(e)}
          value={Post.views}
        />

        <select
          className="select"
          name="creativeFields"
          onChange={(e) => handelChange(e)}
          value={Post.creativeFields}
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
          onChange={(e) => handelChange(e)}
          value={Post.tools}
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
          onChange={(e) => handelChange(e)}
          value={Post.location}
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
          onChange={(e) => handelChange(e)}
          value={Post.school}
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
          onChange={(e) => handelChange(e)}
          value={Post.assets}
        >
          <option value="">Assets</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="Subscrption">Subscription</option>
        </select>

        <select
          className="select"
          name="subscriptions"
          onChange={(e) => handelChange(e)}
          value={Post.subscriptions}
        >
          <option value="">Subscriptions</option>
          <option value="Free">Free</option>
          <option value="PremiumProjects">Premium Projects</option>
        </select>

        <input id="submit" type="Submit" value="Add Post" />
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid gray;
  padding: 30px;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    font-size: large;
  }
  input {
    width: 80%;
    margin: auto;
    font-size: larger;
    text-align: center;
  }
  select {
    width: 80%;
    margin: auto;
    font-size: larger;
    color: #b04f5f;
    font-weight: 500;
  }
  #submit {
    border: 0px;
    cursor: pointer;
    margin-top: 10px;
    width: 200px;
    height: 35px;
  }
  #submit:hover {
    background-color: red;
    color: white;
  }
`;
