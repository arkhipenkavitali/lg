import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <>
            <Header title="Learn greek app" isLoggedIn={false} />
            <p>Hello Vite + React</p>
            <Footer />
        </>
    );
};

export default App;