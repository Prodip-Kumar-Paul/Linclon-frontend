import { toast, ToastContainer } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
   return (
      <>
         <div className="z-[999] backdrop-blur-sm fixed top-0 left-0 h-[100%] w-[100%] bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.6)]">
            <section className=" mt-[45vh] text-center text-violet-900 font-bold animate-pulse animate-spin align-middle text-[3rem]">
               {/* toast.loading("Please wait..."); */}
               <CircularProgress />
            </section>
            {/* <ToastContainer /> */}
         </div>
      </>
   );
};
export default Loading;

// import * as React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// export default function Loading() {
//    return (
//       <Box sx={{ display: "flex" }}>
//          <CircularProgress />
//       </Box>
//    );
// }
