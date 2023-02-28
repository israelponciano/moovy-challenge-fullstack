import { useCallback, useEffect, useState } from "react"
import { useMoovy } from "../api/hooks/UseMoovy";
import { ApiReview } from "../interfaces/Interfaces";

export default function AudioRecorder(props: { imdbId: string}) {
  const { imdbId } = props;
  const { postNewReview, deleteFavReview, getReview } =  useMoovy();

  const [mediaRecorder, setMediaRecorder] = useState<any>();
  const [review, setReview] = useState<any>('');
  const [reviewRender, setReviewRender] = useState<ApiReview>(); 

  const [modal, setModal] = useState<boolean>(false);

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
      const blob = new Blob(chunks, {type: 'audio/ogg; code=opus'});
      const reader = new window.FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        setReview(reader.result);
      }
    }
  }

  const startRecorder = () => {
    getAudio();
    mediaRecorder.start()
    setTimeout(() => {
      mediaRecorder.stop()
    }, 3000);
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

  console.log(reviewRender)  
  
  return (
    <div>
      <button
        onClick={ getMic }
      >
        Config
      </button>
      {
        modal && (
          reviewRender?.review || review ? (
            <>
            <audio src={ reviewRender?.review || review  } controls={ true } />
              
              {
                !reviewRender?.review &&
                <button
                  onClick={() => saveReview()}
                >
                  save
                </button>
              }

              <button
              onClick={() => deleteReview(imdbId)}
              >
                delete
              </button>
            </>
          ) : (
            <>  
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

            </>
          )
        )
      }
    </div>
  )
}
