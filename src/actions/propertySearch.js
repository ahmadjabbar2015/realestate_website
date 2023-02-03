import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginUser from "./auth";

function Search() {
  const { token } = LoginUser();
  const http = axios.create({
    baseURL: "http://demo.pms.crossdevlogix.com/api",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return http;
}

export default Search;
