import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {
  const isSpeaking = true;

  
  const status = CallStatus.FINISHED;
  const messages=[
    'Whats your name ? ' ,
    'My name is Abhi ' 
  ];
  const lastMessage=messages[messages.length-1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="AI-archana"
              width={65}
              height={65}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="Abhi"
              width={540}
              height={540}
              className="rounded-full size-[120px] object-cover"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length >0 && (
        <div className="transcript-border">
            <div className="transcript">
                <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0','animate-fadeIn opacity-100')} >
                    {lastMessage}
                </p>
            </div>
        </div>
      )}


      <div className="w-full flex justify-center">
        {status !== CallStatus.ACTIVE ? (
          <button className="relative btn-call">
            <span className={cn('absolute animate-ping rounded-full opacity-75', status!=='CONNECTING' && 'hidden')}
               />

                <span>
                    {status === CallStatus.INACTIVE || status === CallStatus.FINISHED
                ? "Call"
                : ". . . "}
                </span>
            
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;
