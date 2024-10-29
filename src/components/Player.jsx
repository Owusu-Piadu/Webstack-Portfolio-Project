import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  // Helper function to format time
  const formatTime = (timeValue) => {
    return timeValue < 10 ? `0${timeValue}` : timeValue;
  };

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt='Song artwork' />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle' aria-label="Shuffle" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous' aria-label="Previous" />
          
          {playStatus ? (
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='Pause' aria-label="Pause" />
          ) : (
            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='Play' aria-label="Play" />
          )}
          
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt='Next' aria-label="Next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop' aria-label="Loop" />
        </div>
        
        <div className='flex items-center gap-5'>
          <p>{formatTime(time.currentTime.minute)}:{formatTime(time.currentTime.second)}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>

              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
          </div>
          <p>{formatTime(time.totalTime.minute)}:{formatTime(time.totalTime.second)}</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt='Play count' aria-label="Play count" />
        <img className='w-4' src={assets.mic_icon} alt='Microphone' aria-label="Microphone" />
        <img className='w-4' src={assets.queue_icon} alt='Queue' aria-label="Queue" />
        <img className='w-4' src={assets.speaker_icon} alt='Speaker' aria-label="Speaker" />
        <img className='w-4' src={assets.volume_icon} alt='Volume' aria-label="Volume" />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4' src={assets.mini_player_icon} alt='Mini player' aria-label="Mini player" />
        <img className='w-4' src={assets.zoom_icon} alt='Zoom' aria-label="Zoom" />
      </div>
    </div>
  );
};

export default Player;
