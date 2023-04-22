import React, { useEffect, useMemo, useState } from 'react'
import { useAudio } from 'react-use';
import "./AudioPlayer.css"

function AudioPlayer({ audioUrl }) {
  const [currentTime, setCurrentTime] = useState(0)
    // Utiliza useMemo para memoizar la URL del audio
    const memoizedAudioUrl = useMemo(() => audioUrl, [audioUrl])
  const [audio, state, controls, ref] = useAudio({
    src: audioUrl,
    autoPlay: true,
  });


  useEffect(() => {
    setCurrentTime(state.time || 0);
  }, [state])

  const duration = state.duration || 0;

  return (
    <div className='audio-player'>
      {audio}
      <progress
        className='nes-progress is-warning'
        type='range'
        value={currentTime}
        max={duration} />
      <div className="audio-player-buttons">
        <button className='nes-btn is-warning' onClick={controls.play}>Play</button>
        <button className='nes-btn is-warning' onClick={controls.pause}>Pause</button>
        <button className='nes-btn is-warning' onClick={controls.mute}>Mute</button>
        <button className='nes-btn is-warning' onClick={controls.unmute}>Un-mute</button>
      </div>
      {
        state.time === 0 ? <p>0:00</p> :
          <p>{state?.time?.toString()?.split(".")[0] + "." + state?.time?.toString().split(".")[1]?.slice(0, 2)}</p>
      }
    </div>
  );
};

export default AudioPlayer
