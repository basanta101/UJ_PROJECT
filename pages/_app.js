import { Provider } from "react-redux";
import { useStore } from "../store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
