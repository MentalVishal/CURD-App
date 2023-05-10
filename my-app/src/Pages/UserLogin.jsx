import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AdminLogin } from "../Redux/Authautication/action";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const [showPassword, setShowPassword] = useState(false);

  const handelSubmit = () => {
    let flag = false;
    const AllData = JSON.parse(localStorage.getItem("user"));
    AllData.forEach((element, index) => {
      if (element.email === email && password === element.password) {
        flag = true;
        alert("Login Sucessful");
        localStorage.setItem("loginUser", JSON.stringify(element));
        navigate("/foryou");
      }
    });
    if (flag == false) {
      alert("Username or Password is incorrect");
    }
  };

  return (
    <DIV>
      <div></div>
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
                  <Stack pt={6}>
                    <Text align={"center"} className="Name3">
                      New user?{" "}
                      <Link
                        to={"/signup"}
                        className="Name2"
                        color={"blue.400"}
                        style={{ textDecoration: "none" }}
                      >
                        Create a new Account
                      </Link>
                    </Text>
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
