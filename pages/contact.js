import { Layout } from "../components";

export default function Contact() {
  return <p>Contact page of the app</p>;
}

// eslint-disable-next-line react/display-name
Contact.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps(context) {
  // static site generation with data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      somePropFromServer: data,
    }, // will be passed to the page component as props
  };
}
