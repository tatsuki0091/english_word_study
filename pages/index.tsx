import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Top from "../components/tops/Top";
import { Word } from "../types/Types";
import { fetchWord } from "./api/word";

interface WORDINFO {
  word: Word;
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const word = await fetchWord();
  return {
    props: { word: word },
  };
};
const Home = ({ word }: WORDINFO) => {
  console.log(word);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Top {...word} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
