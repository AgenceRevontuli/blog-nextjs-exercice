import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exercice créer un blog</title>
        <meta name="description" content="Création d'un blog pour mon cours sur NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <header>
          <h1>Bienvenue sur le blog de Code.io</h1>
          <p>Le blog communautaire des aficionados de developpement web</p>
        </header>
        <section className={styles.__blocks}>
          <div className={styles.__blockItem}>
            <h2>Articles</h2>
            <h3>Maximiser votre culture web</h3>
            <p>Chaque auteur tente de vous apporter le plus de valeur possible par article</p>
            <Link href="/blog">
              <a>Lire les articles du blog</a>
            </Link>
          </div>
          <div className={styles.__blockItem}>
            <h2>Utilisateurs</h2>
            <h3>Faites-vous des amis</h3>
            <p>Ajoutez, invitez et discutez avec les différents membres</p>
            <Link href="/utilisateurs">
              <a>Voir la liste des utilisateurs</a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
