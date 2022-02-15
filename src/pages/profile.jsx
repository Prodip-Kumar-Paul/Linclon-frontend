import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../assets/images/logo512.png";
import Loading from "../utils/loading";
import Footer from "../components/footer";
//api
import api from "../apis/apis";
import httpUrl from "../apis/interceptor";

const Profile = () => {
   const [loading, setLoading] = useState(false);
   const storage = sessionStorage;
   const token = storage.getItem("token");
   const [api, setApi] = useState({});
   let handleChange = (data) => {
      let avatar_url = data.avatar_url;
      let login = data.login;
      let name = data.name;
      let type = data.type;
      let bio = data.bio;
      let public_repos = data.public_repos;
      setApi({ ...api, avatar_url, login, name, type, public_repos, bio });
   };
   const getData = () => {
      httpUrl.get(api.USER).then((res) => {
         handleChange(res.data.data);
         console.log(res.data.data);
         setLoading(true);
      });
   };
   useEffect(() => {
      getData();
   }, []);
   // getData();

   const [uploadShown, setUploadShown] = useState(false);
   let ifUploadShown = () => {
      if (uploadShown) setUploadShown(false);
      else setUploadShown(true);
   };
   return (
      <>
         {loading || <Loading />}
         <div className="mx-[5%] my-[2rem] rounded-lg bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)]">
            {/* <button onClick={getData}>Click Here for fetch --</button> */}
            <div className="flex xs:flex-col md:flex-row dark:text-white mx-[2rem] pb-[5rem] gap-10 font-bold">
               <section className="flex flex-col items-center my-10 basis-[30%] shrink-0 xs:mx-auto md:mx-0">
                  <img
                     src={api.avatar_url || Avatar}
                     alt="avatar"
                     className="md:h-[20rem] md:w-[20rem] xs:h-[15rem] xs:w-[15rem] border-2 border-black rounded-full"
                  />
                  <p className=" mt-3 text-2xl">{api.name}</p>
                  <p className="pr-5 text-[1.25rem] text-neutral-400">
                     {api.login}
                  </p>
                  <input
                     name="avatar"
                     style={uploadShown ? {} : { display: "none" }}
                     type="file"
                     className="file:rounded-full file:px-3 file:my-2 "
                  />
                  <button
                     type="submit"
                     style={uploadShown ? {} : { display: "none" }}
                     onClick={ifUploadShown}
                     className="my-4 mr-4 px-2 py-1 bg-cyan-500 text-white rounded-full"
                  >
                     Upload Profile Photo
                  </button>
                  <button
                     type="submit"
                     style={uploadShown ? { display: "none" } : {}}
                     onClick={ifUploadShown}
                     className="my-4 mr-4 px-2 py-1 bg-cyan-500 text-white rounded-full"
                  >
                     Update Profile Photo
                  </button>
               </section>
               <form className=" xs:mx-auto md:ml-[10%] md:mt-[15%] xs:min-w-[10rem] md:min-w-[25rem] text-lg shrink dark:text-neutral-400">
                  <section>Type(Creater/Contributor) :{api.type}</section>
                  <section>Public Repos :{api.public_repos}</section>
                  <br />
                  <label>Name</label>
                  <br />
                  <input
                     value={api.name}
                     className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3"
                  />
                  <br />
                  <label>Bio</label>
                  <br />
                  <textarea
                     value={api.bio}
                     className="bg-neutral-200 text-black h-[10rem] md:min-w-[100%] my-2 rounded-[.25rem] px-3"
                  />
                  <br />
                  <label>Skills</label>
                  <br />
                  <textarea className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3" />
                  <br />
                  <label>Occupation</label>
                  <br />
                  <input className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3" />
                  <br />
                  <label>Location</label>
                  <br />
                  <input
                     placeholder="country,state,city"
                     className="bg-neutral-200 my-2 md:min-w-[100%] rounded-[.25rem] px-3"
                  />
                  <br />
               </form>
            </div>
         </div>
         <Footer />
      </>
   );
};
export default Profile;
