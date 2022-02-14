import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import GitHub from "../assets/images/GitHub-Mark.png";
import Footer from "../utils/footer";
import Loading from "../utils/loading";

//Apis
import githubRequestForValidate from "../apis/githubRequestForValidate";
import api from "../apis/api";
import httpUrl from "../apis/interceptor";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [e_mail, setE_mail] = useState("userUnknown@gmail.com");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [getCode, setGetCode] = useSearchParams();
  const storage = window.sessionStorage;
  const locateBack = () => {
    navigate("/", { replace: true });
  };
  const afterClickLogin = () => {
    setLoading(true);
    const code = getCode.get("code");
    axios
      .post(`${api.baseURL}${api.LOGIN}`, {
        userType: userType,
        email: e_mail,
        githubCode: code,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        storage.setItem("token", res.data.data);
        storage.setItem("email", e_mail);
        locateBack();

        console.log(storage.getItem("token"));
      });
    console.log(`code:${code}`);
  };
  return (
    <>
      {loading && <Loading />}
      <section className="font-bold rounded-[.5rem] max-w-[25rem] mx-auto my-[5rem] bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)] dark:text-white text-lg">
        <br />
        <img
          className="mx-auto rounded-[45px] mb-1"
          src={GitHub}
          alt="GitHub"
          height="90px"
          width="90px"
        />
        <a
          href={githubRequestForValidate}
          className="dark:bg-zinc-900 block hover:text-green-900 rounded-[.3rem] bg-black text-white text-center max-w-[13rem] mx-[auto]"
        >
          Continue with GitHub
        </a>
        <section className="flex flex-col gap-2 mx-auto max-w-[15rem] my-5">
          <select
            onChange={(e) => {
              setUserType(e.target.selectedOptions[0].text);
            }}
            className="rounded-full px-3 text-black border-2"
          >
            <option value="0">User Type ?</option>
            <option value="1">Creator</option>
            <option value="2">Contributor</option>
          </select>
          <label className="mx-auto">Email :</label>
          <input
            type="email"
            placeholder="eg: email@gmail.com"
            className="rounded-[.5rem] text-black border-2 px-2"
            onChange={(e) => {
              setE_mail(e.target.value);
            }}
            required
          />
          <a href="/" className="mr-32 hover:text-green-900">
            forget email?
          </a>
          <button
            onClick={afterClickLogin}
            className="mx-auto bg-cyan-500 py-1 px-2 hover:text-black cursor-pointer text-white rounded-md"
          >
            Log In
          </button>
        </section>
        <p className="font-thin text-center mx-[3rem] dark:text-white text-slate-500 mt-10">
          *by continuing this you can also create a new account with GitHub
        </p>
      </section>
      <Footer />
    </>
  );
};

export default LogIn;
