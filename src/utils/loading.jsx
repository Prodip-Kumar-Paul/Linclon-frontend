import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
   return (
      <>
         <div className="z-[999] backdrop-blur-sm fixed top-0 left-0 h-[100%] w-[100%] bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.6)]">
            <section className=" mt-[45vh] text-center text-violet-900 font-bold animate-pulse animate-spin align-middle text-[3rem]">
               <CircularProgress />
            </section>
         </div>
      </>
   );
};
export default Loading;
