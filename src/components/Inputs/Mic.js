import { useState,useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "../../css/Chat.css";


function Mic(props) {

    const commands=[{
        command: "hey maya",
        callback: () => {
        start("hey maya");
        }
    },
    {
        command: "hello maya",
        callback: () => {
        start();
        }
    },
    {
        command: "Good * maya",
        callback: (time) => {
        start();
        }
    }];

  const { transcript,finalTranscript,interimTranscript, resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition({commands});
  const [isListening, setIsListening] = useState(false);


 useEffect(() => {
  if (finalTranscript !== '') {
    console.log('Got final result:', finalTranscript);
    stop();
  }
}, [interimTranscript, finalTranscript]);


  if (!browserSupportsSpeechRecognition) {
    return null
  }
  
  const start = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous:true
    });
  };

  const stop = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    setTimeout(function(){
      ask();
      reset();
    },2000);
  };


  const ask=function(){
    props.action(finalTranscript);
  }

  const reset = () => {
    resetTranscript();
  };
  return (
    <div className="input-group">
        <div className="microphone-status">
          {props.loading &&
          (<Spinner  as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true" variant={props.dark ? "light":"danger"} />)}
         {!props.loading &&
          (<>{
            isListening ?
            <> <Spinner  as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true" variant={props.dark ? "light":"danger"} />
            <br/><br/>
            <small>Listening...</small></>: 
            <Button disabled={transcript} variant="orange" className="btn-small" onClick={start}>
            Start listening
            </Button>
          }</>)}
       <br/>
       <br/>
       {/* {(isListening && !props.loading) && (
        <>
         <Button variant="red" className="btn-small" onClick={() => stop()}>
           Stop
         </Button>
        </>
       )} */}
        </div>
    </div>
  );
}
export default Mic;