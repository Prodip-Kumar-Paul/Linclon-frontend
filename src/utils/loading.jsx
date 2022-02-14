const Loading = () => {
  return (
    <>
      <div className=" backdrop-blur-sm fixed top-0 left-0 h-[100%] w-[100%] bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.6)]">
        <section className=" mt-[45vh] text-center text-cyan-600 text-[2rem] font-bold animate-bounce">
          .Processing.<div className="animate-spin">...</div>
        </section>
      </div>
    </>
  );
};
export default Loading;
