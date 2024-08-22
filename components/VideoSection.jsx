"use client"
import dynamic from 'next/dynamic';

// تحميل مكون ReactPlayer فقط على جانب العميل
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoSection = ({ videoUrl, title }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-4 p-0 border-2 border-blue-900  bg-gray-50 ">
     
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <ReactPlayer
          className="absolute top-0 left-0 w-full h-full"
          url={videoUrl}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <h2 className="text-md font-bold text-blue-900 my-3 px-2">{title}</h2>
      <p className='p-2'>البرامج الصوتية والمرئية، والمحاضرات المُسجلة، واللقاءات الإعلامية.</p>
    </div>
  );
};

export default VideoSection;
