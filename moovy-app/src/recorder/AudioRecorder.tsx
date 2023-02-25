import { useState } from "react"

export default function AudioRecorder() {
  const [mediaRecorder, setMediaRecorder] = useState<any>();
  const [audioString, setAudioString ] = useState<any>();

  const getMic = async () => {
    try {
      const stream = (await navigator.mediaDevices.getUserMedia({ audio: true }));
      setMediaRecorder(new MediaRecorder(stream));
    } catch (error) {
      alert(`Você deve permitir o audio. ${error}`); 
    }
  }

  const getAudio = () => {
    let chunks: any[] = [];
    mediaRecorder.ondataavailable = (data: any) => {
      chunks.push(data.data);
    };
    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, {type: 'audio/ogg; code=opus'});
      const reader = new window.FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        setAudioString(reader.result);
      }
    }
  }

  const startRecorder = () => {
    getAudio()
    mediaRecorder.start()
    setTimeout(() => {
      mediaRecorder.stop()
    }, 3000);
  }

  const stopRecorder = () => {
    getAudio()
    mediaRecorder.stop();
  }
  
  return (
    <div>
      AudioRecorder
      <button
        onClick={ getMic }
      >
        Mic
      </button>
      <button
        onClick={ startRecorder }
      >
        Record
      </button>

      <button
        onClick={ stopRecorder }
      >
        Stop
      </button>

      <button
        onClick={ () => setAudioString('') }
      >
        Delete
      </button>

      <audio src={ audioString } controls={true}></audio>
    </div>
  )
}
