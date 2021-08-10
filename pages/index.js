import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Layout } from "../components";



export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => ({
    loggedInUser: state.loggedInUser,
  }));
  useEffect(() => {
    // const user = Cookies.get("loggedInUser");
    // // if user is not loggedIn and cookie is not set redirect to Login
    // if (!user) {
    //   router.push("/login");
    // }
    // // else let him stay on homePage
    // if (user && !loggedInUser) {
    //   // page reload
    //   dispatch({ type: "UPDATE_LOGGED_IN_USER", payload: true });
    // }
  });

  return (
    <>
      <h4>Home Page when user hits the url</h4>
      <p>
        this is the page that will have some info about the company and this is SSR
      </p>
    </>
  );
}

// eslint-disable-next-line react/display-name
Home.getLayout = (page) => <Layout>{page}</Layout>;

export async function getServerSideProps(context) {
  // static site generation with data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      somePropFromServer: data,
    }, // will be passed to the page component as props
  };
}
