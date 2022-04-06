import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@app/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sayeed Afridi</title>
        <meta
          name='description'
          content="Sayeed's personal portfolio and blog"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My world</h1>

        <p className={styles.description}>
          I am <code className={styles.code}>CONSTRUCTING</code> my new world.
          It will be available soon
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made by <span className={styles.logo}>Sayeed Afridi</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
