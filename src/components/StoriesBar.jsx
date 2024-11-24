const StoriesBar = () => {
    const StoriesStyle = "w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center p-6";
  return (
      <div className="fixed top-10 left-64 w-full ">
            <div className="flex space-x-4 pl-[120px]">

      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
      <div className={StoriesStyle}>Stories</div>
        </div>
      
    </div>
  );
};

export default StoriesBar;
