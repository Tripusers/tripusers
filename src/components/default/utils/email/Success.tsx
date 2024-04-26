"use client";

import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import "./style.scss";
import ImageSize from "@/src/utils/image-utils";
import { useSuccessPop } from "@/src/providers/SuccessPop";
import { useEffect, useRef } from "react";

const Success = (props: { text: string }) => {
  const { text, changeState } = useSuccessPop();
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  //console.log(text);

  useEffect(() => {
    const boxClose = (e: any) => {
      if (!ContainerRef.current?.contains(e.target)) {
        changeState(false);
      }
    };
    document.addEventListener("mousedown", boxClose);
    return () => {
      document.removeEventListener("mousedown", boxClose);
    };
  }, []);

  return (
    <div id="successPopup" ref={ContainerRef}>
      <div className="success-card">
        <button onClick={() => changeState(false)}>
          <AiFillCloseCircle />
        </button>
        <div className="icon-container">
          <div className="icon">
            <Image
              src="https://i.postimg.cc/fTymq709/tick.gif"
              alt="tick"
              fill
              sizes={ImageSize.bannerSizes}
            />
          </div>
        </div>
        <div className="text">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
