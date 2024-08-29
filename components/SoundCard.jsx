'use client'
import { FaDownload, FaRegUser } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";
const LectureCard = ({ title, lectureNumber, bookName, publicationDate, lecturer, tags,url }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
  
    const handleAudioPlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className="border p-4 border-[#015f6c] flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#015f6c] cursor-pointer">
            {title} - {bookName} {lectureNumber}
          </h2>
          <p className="text-gray-600 mt-3">تاريخ النشر: {publicationDate}</p>
          {tags && tags.length > 0 && (
            <div className="mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-sm text-gray-500 mr-2 bg-gray-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
  
        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center">
            <p className="text-gray-600 ml-2 flex items-center gap-2">
              <FaRegUser size={16} className="text-gray-500" /> {lecturer}
            </p>
            <i className="fas fa-user-circle text-gray-500"></i>
          </div>
  
          <div className="flex items-center gap-4">
            {/* زر تشغيل الصوت */}
            <button
              onClick={handleAudioPlayPause}
              className="bg-[#015f6c] text-white px-4 py-2 rounded hover:bg-blue-[#015f6c] transition"
            >
              {isPlaying ? <IoIosPause size={18} color="white" /> : <FaPlay size={18} color="white" />}
            </button>
  
            {/* زر تحميل الصوت */}
            <a href="/v.mp3" download className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              <FaDownload size={18} color="white" />
            </a>
          </div>
        </div>
  
        {/* عنصر الصوت */}
        <audio ref={audioRef} src={url}/>
      </div>
    );
  };
  

export default LectureCard;
