import { useCallback, useEffect, useState } from "react"
import { useMoovy } from "../api/hooks/UseMoovy";
import { ApiReview } from "../interfaces/Interfaces";
import mic from '../images/mic.svg'
import pause from '../images/pause.svg'
import save from '../images/save.svg'
import remove from '../images/delete.svg'
import play from '../images/play.svg'

export default function AudioRecorder(props: { imdbId: string}) {
  const { imdbId } = props;
  const { postNewReview, deleteFavReview, getReview } =  useMoovy();

  const [mediaRecorder, setMediaRecorder] = useState<any>();
  const [review, setReview] = useState<any>('');
  const [reviewRender, setReviewRender] = useState<ApiReview>(); 

  const [modal, setModal] = useState<boolean>(false);
  const [recording, setRecording] = useState<boolean>(false)

  const getMic = async () => {
    try {
      const stream = (await navigator.mediaDevices.getUserMedia({ audio: true }));
      setMediaRecorder(new MediaRecorder(stream));
    } catch (error) {
      alert(`Você deve permitir o audio. ${error}`);
    }
    setModal(!modal)
  }

  const getAudio = () => {
    let chunks: any[] = [];
    mediaRecorder.ondataavailable = (data: any) => {
      chunks.push(data.data);
    };
    mediaRecorder.onstop = async () => {
      setRecording(false);
      const blob = new Blob(chunks, {type: 'audio/ogg; code=opus'});
      const reader = new window.FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        setReview(reader.result);
      }
    }
  }

  const startRecorder = () => {
    setRecording(true);
    getAudio();
    mediaRecorder.start()
    setTimeout(() => {
      mediaRecorder.stop()
    }, 60000);
  }

  const stopRecorder = () => {
    mediaRecorder.stop();
  }

  const deleteReview = async (imdbId: string) => {
    deleteFavReview(imdbId);
    setReview('');
    setReviewRender({ review, imdbId });

  };

  const saveReview = async () => {
    postNewReview({ review, imdbId });
    setReview('')
  };

  const getAudioFromBackEnd = useCallback(async () => {
    setReviewRender(await getReview(imdbId));
  }, [getReview, imdbId]);

  useEffect(() => {
    getAudioFromBackEnd();
  }, [getAudioFromBackEnd, review])
  
  return (
    <div>
      <button
        onClick={ getMic }
      >
        <img className='w-10' src={ mic } alt="mic" />
      </button>
      { recording && <span className='text-primary text-lg font-bold py-2 px-4'>...</span> }

<div className='flex flex-row'>

      {
        modal && (
          review || reviewRender?.review ? (
            <>
            <audio src={ reviewRender?.review || review  } controls={ true } />
            
              <button
                className='border-2 border-primary bg-secondaryDark hover:bg-secondary py-2 px-4 rounded-l'
                onClick={() => saveReview()}
              >
                <img className='w-10' src={ save } alt="mic" />
              </button>

              <button
              className='border-2 border-primary bg-secondaryDark hover:bg-secondary py-2 px-4 rounded-r'
              onClick={() => deleteReview(imdbId)}
              >
                <img className='w-10' src={ remove } alt="mic" />
              </button>
            </>
          ) : (
            <>  
              <button
                className='border-2 border-primary bg-secondaryDark hover:bg-secondary py-2 px-4 rounded-l'
                onClick={ startRecorder }
                >
                <img className='w-10' src={ play } alt="mic" />
              </button>

              <button
                className='border-2 border-primary bg-secondaryDark hover:bg-secondary py-2 px-4 rounded-r'
                onClick={ stopRecorder }
              >
                <img className='w-10' src={ pause } alt="mic" />
              </button>
            </>
          )
          )
        }
        </div>
    </div>
  )
}
