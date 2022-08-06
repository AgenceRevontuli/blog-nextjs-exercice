import React from "react";

export default function articles(props) {
  if (!props.articleEnCours) {
    return <h1>Chargement de l&apos;article</h1>;
  }
  return (
    <main className="container">
      <h1>{props.articleEnCours.title}</h1>
      <p>{props.articleEnCours.body}</p>
    </main>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.articles;
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response) => response.json()
  );
  const articleEnCours = data.find((item) => item.title === slug);

  if (!articleEnCours) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleEnCours,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response) => response.json()
  );
  const paths = data.map((item) => ({
    params: { articles: item.title },
  }));
  return {
    paths,
    fallback: true,
  };
}
