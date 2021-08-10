import { Input, Button, Layout } from "../components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

// const withSession = () {

// }

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({
    users: state.users,
  }));
  const [fields, updateFields] = useState({
    name: "",
    pwd: "",
  });

  function handleLogin() {
    // validate the email and password
    if (!fields.name) {
      alert("username cannot be empty");
    }
    if (!fields.pwd) {
      alert("username cannot be empty");
    }

    const hasUser = users.some(
      (user) =>
        user.name.toLowerCase() === fields.name.toLowerCase() &&
        user.pwd === fields.pwd.toLowerCase()
    );

    if (hasUser) {
      // store the current user in cookie and redux state
      Cookies.set("loggedInUser", fields.name);
      dispatch({ type: "UPDATE_LOGGED_IN_USER", payload: true });
      // redirect to homepage,
      router.push("/");
    } else {
      // alert the error to the user
      alert("user not found");
    }
  }

  const { name, pwd } = fields;
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.loginWrapper}>
        <Input
          // type="text"
          value={name}
          id="username"
          label="USERNAME"
          onChange={(e) => updateFields({ ...fields, name: e.target.value })}
          placeholder="Enter user name"
        />
        <Input
          // type="password"
          value={pwd}
          id="userPwd"
          label="PASSWORD"
          onChange={(e) => updateFields({ ...fields, pwd: e.target.value })}
          placeholder="Enter Password"
        />
        <Button label="LOGIN" onClick={handleLogin} />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
Login.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps = async function ({ req, res }) {
  console.log("ppp", req, res);

  return {
    props: {
      someprop: "basanta",
    },
  };
  // Get the user's session based on the request
  // const user = req.session.get('user');

  // if (!user) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  // }

  // return {
  //   props: { user },
  // }
};
