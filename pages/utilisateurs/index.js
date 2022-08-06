import React from "react";
import styles from './Users.module.css'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function index(props) {
  return (
    <>
      <main className="container">
        <section>
          <h1 className={styles.titre}>Retrouvez ici tous les utilisateurs</h1>
          <p>Voici nos membres qui rédigent des articles</p>
        </section>
        <section className={styles.users}>
          {props.data.map(item => (
            <div key={uuidv4()} className={styles.user__card}>
              <h2>{item.username}</h2>
                <Link href={`mailto:${item.email}`}>
                  <a>Contacter</a>
                </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(){
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
  return{
    props: {
      data
    }
  }
}
