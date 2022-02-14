import React,{useState,useEffect} from "react";
import Footer from "../utils/footer";
import { Link } from "react-router-dom";

//icons
import programming from "../assets/images/home_icons/programming.png";
import connecting from "../assets/images/home_icons/connectingWorld.png";
import team from "../assets/images/home_icons/team.png";
import creator from "../assets/images/home_icons/git.png";
import findProject from "../assets/images/home_icons/findProject.png";
import findProfile from "../assets/images/home_icons/findProfile.png";
import feedback from "../assets/images/home_icons/feedback.png";

const Landing = () => {
  // const [name,setName]=useState();
  // useEffect(() => {
  //   setName( sessionStorage.getItem("email"));
    
  // }, []);
  let name=sessionStorage.getItem('email');
  const language = [
    ["JAVASCRIPT"],
    ["C++"],
    ["BLOCKCHAIN"],
    ["REACT Js"],
    ["ANGULAR Js"],
    ["GO"],
    ["CSS"],
    ["MERN"],
    ["MEAN"],
    ["MONGO DB"],
    ["PYTHON"],
    ["JAVA"],
    ["RUBY"],
    ["SQL"],
    ["C#"],
    ["Any Other?"],
  ];
  return (
    <>
      <div className="my-[2rem] mx-[5%] py-[3rem] bg-white rounded-lg dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)] dark:text-white overflow-hidden">
        <section className="flex flex-col md:text-2xl xs:text-thin mb-[5rem]">
          <article className="items-center flex md:flex-row xs:flex-col-reverse bg-white rounded-lg shadow-2xl">
            <section className="flex flex-col ml-[5%] mt-[2rem]">
              <p className="italic text-2xl text-black font-bold">
                Hey <span className="text-cyan-500">{name}</span>,
              </p>
              <p className="mt-5 text-black text-[1.75rem] font-bold">
                Get Ready For Building New Project!
              </p>
              <br />
              <p className="text-violet-900 border-l pl-5 ">
                Build your First Project with LINCLON as a Contributor And
                Execute / improve your skills.{" "}
              </p>
              <div className="flex flex-row my-2">
                <Link
                  to={"/projects"}
                  className="self-start ml-5 bg-cyan-500 rounded-md px-2 py-1 text-white text-[1rem]"
                >
                  Get Started
                </Link>
                <Link
                  to={"/linclonauth"}
                  className="hover:bg-cyan-100 ml-5 bg-white text-cyan-500 border-2 border-cyan-500 rounded-md px-4 pb-1 text-[1rem]"
                >
                  LogIn
                </Link>
              </div>
            </section>
            <img alt="" src={programming} className="w-[60%] rounded-lg" />
          </article>
          <div className="h-[.1rem] min-w-[90%] my-[2rem] mx-auto bg-gray-900 dark:bg-white rounded-full animate-pulse"></div>
          <article className="flex">
            <img
              alt=""
              src={connecting}
              className="min-h-[50%] w-[50%] rounded-full"
            />
            <p className="grow self-center w-[30%] text-cyan-500 mx-[10%]">
              <span className="dark:text-neutral-100 text-black font-bold">
                Connect From Throughout the World -
              </span>
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet..
            </p>
          </article>
          <article className="flex">
            <p className="grow self-center  w-[30%] text-cyan-500 mx-[10%]">
              <span className=" dark:text-neutral-100 text-black font-bold">
                Create Your Own Team -
              </span>
              Lorem ipsum Voluptates voluptatibus voluptas voluptatum vitae quo.
              Magni laudantium eos corrupti dolor facilis?
            </p>
            <img
              alt=""
              src={team}
              className="min-h-[50%] w-[50%] rounded-full"
            />
          </article>
          <article className="flex">
            <img
              alt=""
              src={creator}
              className="min-h-[50%] w-[50%] rounded-full"
            />
            <p className="grow self-center  w-[30%] text-cyan-500 mx-[10%]">
              <span className=" dark:text-neutral-100 text-black font-bold">
                Share your idea as a creator --
              </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              inventore!
            </p>
          </article>
          <article className="flex ml-[10%]">
            <img alt="" src={findProfile} className=" w-[30%] rounded-full" />
            <img alt="" src={findProject} className=" w-[30%] rounded-full" />
            <img alt="" src={feedback} className="w-[30%] rounded-full" />
          </article>
          <p className="grow text-cyan-500 mx-[10%] mt-[2rem] text-center">
            And Many More...!
          </p>
        </section>

        <p className="ml-[5%] my-5 text-2xl">
          Search projects by specific Languages / Technologies :
        </p>
        <div className="flex flex-row gap-5 justify-center max-h-[25rem] mx-[5%] border-2 rounded-lg flex-wrap overflow-auto">
          {language.map((card, index) => {
            return (
              <section
                key={card}
                className="text-center text-white max-w-[12rem] min-h-[12rem] mx-4 px-2 py-2 my-4 bg-cyan-500 rounded-[0.25rem]"
              >
                {card}
                <p className="text-black">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
              </section>
            );
          })}
        </div>
        <p className="ml-[5%] my-5 text-2xl">
          Most Frequently Asked Questions (FAQs) :
        </p>
        <div className="flex flex-col gap-2 px-5 py-3 text-[1.25rem] text-black mx-[5%] border-2 rounded-lg ">
          <select className="border-2 rounded-lg px-5 py-1">
            <option value="0">
              what Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit, temporibus. ?
            </option>
          </select>
          <select className="border-2 rounded-lg px-5 py-1">
            <option value="0">what?</option>
          </select>
          <select className="border-2 rounded-lg px-5 py-1">
            <option value="0">what?</option>
          </select>
          <select className="border-2 rounded-lg px-5 py-1">
            <option value="0">what?</option>
          </select>
          <select className="border-2 rounded-lg px-5 py-1">
            <option value="0">what?</option>
          </select>
        </div>
        <article className="mx-auto bg-cyan-500 text-white rounded-full max-w-fit px-4 py-2 mt-10 text-center">
          <a href="#navTop">Back to Top</a>
        </article>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
