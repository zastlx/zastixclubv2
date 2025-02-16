import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./views";
import { Header } from "./components";
import Footer from "./components/footer";
import { FriendStoreProvider } from "./utils/friendsStore";
import About from "./views/about";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <FriendStoreProvider>
                    <Routes>
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </FriendStoreProvider>

                <Footer />
            </BrowserRouter>
        </>
    )
}