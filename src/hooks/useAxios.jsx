import axios from "axios";
import React from "react";

const axiosfetch = axios.create({
    baseURL: "https://quickcart-two-orpin.vercel.app",
});
const useAxios = () => {
    return axiosfetch;
};

export default useAxios;
