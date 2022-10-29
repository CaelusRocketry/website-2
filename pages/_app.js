import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../javascript/jsstuff.js";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
