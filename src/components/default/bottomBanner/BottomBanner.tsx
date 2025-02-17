"use client";

import { getBottomBanner } from "@/src/sanity/sanity-utils";
import { footer } from "@/src/types/footer";
import { useEffect, useState } from "react";
import "./style.scss";
import ImageSize from "@/src/utils/image-utils";
import CustomiseForm from "../../forms/CustomiseForm";

const BottomBanner = () => {
  const [data, setData] = useState<footer>();
  const [mobileForm, setMobileForm] = useState(false);

  const fetchBanner = async () => {
    const response = await getBottomBanner();
    setData(response);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  //console.log("data->", data);

  if (!data) {
    return null;
  }

  return (
    <section id="bottomBanner">
      {mobileForm && <CustomiseForm onClick={() => setMobileForm(false)} />}
      <div className="container">
        <div className="top">
          <h3>{data.bottomBanner.headline}</h3>
          <p>{data.bottomBanner.description}</p>
          <button onClick={() => setMobileForm(true)}>Send Enquiry</button>
        </div>
        <div className="bottom">
          <div className="img-cont">
            <img
              src={data.bottomBanner.image}
              alt="banner image"
              sizes={ImageSize.cardSize}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
