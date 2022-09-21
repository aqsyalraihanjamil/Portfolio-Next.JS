/* eslint-disable require-jsdoc */
import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Data from "../../data/list.json";
import Link from "next/link";
import Image from "next/image";
import Github from "../../public/githubhd.png";
import Hide from "../../public/hide.svg";
import Show from "../../public/show.svg";
type CardProps = {
  data: any;
};

interface color {
  [key: string]: string;
}
const color: color = Data.Colors;
const Card: FunctionComponent<CardProps> = ({ data }) => (
  //  the text is in left side , right side is gonna be animated scroll image project
  <div className={"snap-start w-screen min-h-screen flex"}>
    <div className="w-1/2 m-8 mr-12">
      <p className="text-xl">{data.id}</p>
      {/* <span className={styles.toblack}>AYAYAYAYAYAYAYAYAYAYA</span> */}
      <p className={"text-4xl font-bold mt-20"}>{data.title}</p>
      <p className="text-md mt-2">{data.date}</p>
      <p className={"text-lg mt-8 font-light " + styles.golds}>{data.desc}</p>
      {/* Below here is mapping tags */}
      <div className="flex flex-wrap mt-6 w-3/4">
        {data.genre.map((item: any, key: number) => (
          <div
            key={key}
            className="px-4 py-1.5 m-2 ml-0 mr-4 rounded-full outline outline-gray-400 outline-2"
            // style={{ backgroundColor: coloring(item) }}
          >
            <p
              className={
                "text-sm font-semibold spacing tracking-wider text-gray-600"
              }
              // style={{ color: color[item] }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Below here is button for detailed project and link to github site etc. */}

      <div className="mt-10 gap-10 flex">
        <div>
          <Link href={data.github} passHref>
            <button className="p-3 px-8 outline rounded-sm">
              <div className="flex w-full h-full justify-center items-center gap-4">
                <div className="w-8 h-8">
                  <Image
                    src={Github}
                    className="h-full w-full absolute top-0 bottom-0 m-auto"
                  />
                </div>
                <p className="text-lg font-semibold">Github</p>
              </div>
            </button>
          </Link>
        </div>
        {data.opensource && (
          <Link href={data.opensource} passHref>
            <button className="p-3 px-8 outline rounded-sm">
              <div className="flex w-full h-full justify-center items-center gap-4">
                <div className="w-8 h-8">
                  <Image src={Show} height={40} width={40} />
                </div>
                <p className="text-lg font-semibold">Open Source (preview)</p>
              </div>
            </button>
          </Link>
        )}
        {!data.opensource && (
          <button className="p-3 px-8 outline rounded-sm outline-gray-300 cursor-not-allowed">
            <div className="flex w-full h-full justify-center items-center gap-4">
              <div className="w-8 h-8">
                <Image src={Hide} height={40} width={40} />
              </div>
              <p className="text-lg font-semibold text-gray-300">
                Open Source (preview)
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
    {/* This is for image */}
    <div className="w-1/2"></div>
  </div>
);

export default Card;
