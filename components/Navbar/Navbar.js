import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLogout() {
    dispatch({ type: "UPDATE_LOGGED_IN_USER", payload: false });
    Cookies.remove("loggedInUser");
    router.push("/login");
  }

  return (
    <ul className={styles.navWrapper}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/courses">
          <a>courses</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </li>
      {Cookies.get("loggedInUser") ? (
        <li onClick={handleLogout}>logout</li>
      ) : (
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      )}
    </ul>
  );
}
