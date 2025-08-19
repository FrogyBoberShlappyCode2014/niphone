// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NiPhone: Прикольна Штука!</title>
        <meta name="description" content="NiPhone - це справжня віртуальна епопея та цифровий безлад!" />
        <link rel="icon" href="/favicon.ico" />
        {/* Додаємо фіолетову тему! */}
        <meta name="theme-color" content="#8A2BE2" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ласкаво просимо до NiPhone! 🐸🦫
        </h1>

        <p className={styles.description}>
          Це ще один крок у нашій{' '}
          <code className={styles.code}>віртуальній епопеї</code>.
          <br />
          Прикольна штука, яка стане <code className={styles.code}>цифровим безладом</code>, що ми пам'ятаємо <code className={styles.code}>НА-ЗА-ВЖДИ</code>!
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/niphone/niphone" className={styles.card}>
            <h2>Бобровий Код &rarr;</h2>
            <p>Дослідити вихідний код, що створює РЖАЧ! (у майбутньому)</p>
          </a>

          <a href="https://frogybobershlappycode2014.github.io/" className={styles.card}>
            <h2>Шляпний Архітектор &rarr;</h2>
            <p>Повернутися до основної РЖАЧНОЇ ІМПЕРІЇ!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/niphone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Зроблено з любов'ю та цифровим безладом{' '}
          <span className={styles.logo}>
            NiPhone
          </span>
        </a>
      </footer>
    </div>
  );
}