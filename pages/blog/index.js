import React from "react"
import styles from "../../styles/Blog.module.css"
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function index(props) {
  return (
    <>
      <main className="container">
        <section>
          <h1 className={styles.titre}>
            Retrouvez ici tous les articles rédigés par nos membres
          </h1>
          <p>La liste de tous nos articles ci-dessous</p>
        </section>
        <section className={styles.articles}>
          {props.data.map(item => (
            <div key={uuidv4()} className={styles.__articleItem}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <Link href={`/blog/${item.title}`}>
                <a>Lire la suite</a>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

// Importer les articles de l'API fakeJson
export async function getStaticProps(){
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
  return{
    props: {
      data
    }
  }
}