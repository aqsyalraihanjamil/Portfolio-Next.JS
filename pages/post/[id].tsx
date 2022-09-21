import Data from "../../data/list.json";
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Data.Data.map((data) => ({
    params: { id: data.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const detailData = Data.Data.filter((p) => p.id.toString() === id);
  return {
    props: {
      data: detailData[0],
    },
  };
};

/**
 * @return {JSX.Element}
 */
export default function Detail({ data }: { data: any }) {
  return (
    <>
      <Link href="/">{data.id}</Link>
    </>
  );
}
