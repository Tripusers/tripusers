"use client";

import SwiperHero from "@/src/components/international/trending/Swiper";
import { getTrendingInternational } from "@/src/sanity/sanity-utils";
import "../style.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { international } from "@/src/types/international";
import PageLoading from "@/src/components/default/loader/PageLoading";
import ImageSize from "@/src/utils/image-utils";

const page = () => {
  const [internationalTrending, setInternationalTrending] =
    useState<international[]>();

  useEffect(() => {
    const fetchInternationalTrending = async () => {
      const InternationalData = await getTrendingInternational();
      setInternationalTrending(InternationalData);
    };
    fetchInternationalTrending();
  }, []);

  if (!internationalTrending) {
    return <PageLoading />;
  }
  //console.log("InternationalData->", InternationalData);

  return (
    <>
      {internationalTrending && (
        <SwiperHero title="International" data={internationalTrending} />
      )}
      <section id="internationalPage">
        <div className="grid">
          {internationalTrending?.map((data, index) => (
            <Link
              href={`/international/${data.slug}`}
              key={index}
              className="child-container"
            >
              <div className="img-container">
                {data?.cardImage && (
                  <img
                    src={data.cardImage.asset.url}
                    alt="hero background"
                    sizes={ImageSize.cardSize}
                  />
                )}
              </div>
              <div className="cta-container">
                <div className="text-container">
                  <h3>{data.name}</h3>
                  {data.internationalPackages && (
                    <p>
                      Starts from{" "}
                      {data.internationalPackages.length == 0
                        ? 1500
                        : data?.internationalPackages[0].price.toLocaleString(
                            "en-IN"
                          )}
                    </p>
                  )}
                </div>
                <button>View Details</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
