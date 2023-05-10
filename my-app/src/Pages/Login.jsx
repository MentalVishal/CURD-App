import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AdminLogin } from "../Redux/Authautication/action";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const [showPassword, setShowPassword] = useState(false);

  console.log(location);

  const handelSubmit = () => {
    const userData = {
      email,
      password,
    };
    dispatch(AdminLogin(userData)).then((res) => {
      navigate(location.state);
    });
    // setEmail("");
    // setPassword("");
  };

  return (
    <DIV>
      <div>
        {/* <img
          className="image"
          src="https://auth.services.adobe.com/img/canvas/Fotolia_231796301_XL.jpg"
          alt=""
        /> */}
      </div>
      <div className="primary2">
        <Flex
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
          className="flex"
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading className="Size" textAlign={"center"}>
                Log In
              </Heading>
              <Text className="Size2" fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌
              </Text>
            </Stack>
            <div className="Primary">
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel className="Name">Email address</FormLabel>
                    <Input
                      className="input2"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel className="Name">Password</FormLabel>
                    <InputGroup>
                      <Input
                        className="input2"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          autoFocus
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? (
                            <ViewIcon
                              viewBox="0 0 24 24"
                              className="icon"
                              p={"2.5px"}
                              boxSize={35}
                            />
                          ) : (
                            <ViewOffIcon
                              boxSize={35}
                              p={"2.5px"}
                              className="icon"
                            />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      className="button"
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={handelSubmit}
                    >
                      Log In
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </div>
          </Stack>
        </Flex>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #626363
    url("https://auth.services.adobe.com/img/canvas/Fotolia_231796301_XL.jpg");
  background-size: cover;
  height: 92vh;

  .Primary {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* height: 430px;
    width: 500px; */
    border-radius: 10px;
    border-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    bottom: 50px;
    padding: 10px;
  }
  .primary2 {
    width: 69%;
    padding: 10px;
    height: 75%;
    margin: auto;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
  }
  .Name {
    /* border: 2px solid red; */
    height: 40px;
    font-size: 18px;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }

  .Name2 {
    /* border: 2px solid red; */
    height: 40px;
    font-size: 18px;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    cursor: pointer;
    color: #4299e1;
  }
  .Name3 {
    /* border: 2px solid red; */

    font-size: 18px;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }

  .Size {
    font-size: 38px;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    text-align: center;
  }

  .Size2 {
    text-align: center;
    font-size: 18px;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }

  .input {
    height: 40px;
    font-size: larger;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    color: green;

    width: 230px;
    /* border: 2px solid red; */
    border-radius: 10px;
  }

  .input2 {
    text-align: left;
    height: 40px;
    width: 475px;
    /* border: 2px solid red; */
    font-size: larger;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    color: green;
    border-radius: 10px;
  }

  .icon {
    /* border: none; */
    /* border-color: var(--chakra-colors-gray-200); */
    border-color: none;
    text-decoration: none;
    box-shadow: var(--chakra-shadows-outline);
    /* box-shadow-ra: ; */
    color: green;
    border-radius: 40px;
  }

  .button {
    margin-top: 20px;
    height: 60px;
    border-radius: 10px;
    background-color: #4299e1;
    font-size: larger;
    font-family: sans-serif Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
  }

  .image {
    -webkit-background-size: cover;
    background-size: cover;

    height: 100%;
    width: 112%;
    display: block;
  }
`;

// const DIV = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   border: 1px solid gray;
//   width: 50%;
//   margin: auto;
//   padding: 15px;

//   input {
//     font-size: large;
//   }
//   button {
//     font-size: large;
//     margin-top: 10px;
//     border: none;
//     height: 35px;
//   }
//   button:hover {
//     background-color: red;
//     cursor: pointer;
//     color: white;
//   }
//   h2 {
//     color: ${({ isAuth }) => (isAuth ? "green" : "red")};
//   }
// `;
{
  /* <h2>{isAuth ? "Login Successful" : "Login to Continue"}</h2>

<h1>LOGIN</h1>
<input
  type="email"
  placeholder="Admin Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  placeholder="Admin Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handelSubmit}>Submit</button> */
}
