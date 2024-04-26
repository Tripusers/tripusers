"use client";

import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import "./style.scss";
import ImageSize from "@/src/utils/image-utils";
import { useSuccessPop } from "@/src/providers/SuccessPop";

const Success = () => {
  const { changeState, text } = useSuccessPop();

  return (
    <div id="successPopup">
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
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
