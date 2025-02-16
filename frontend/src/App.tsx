import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FriendStoreProvider } from "./utils/friendsStore";
import { ProjectStoreProvider } from "./utils/projectsStore";
import { Home, Projects } from "./views";
import { Header, Footer } from "./components";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <FriendStoreProvider>
                    <ProjectStoreProvider>
                        <Routes>
                            <Route path="*" element={<Navigate to="/" />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            {/* <Route path="/blog" element={<Blog />} /> */}
                        </Routes>
                    </ProjectStoreProvider>
                </FriendStoreProvider>

                <Footer />
            </BrowserRouter>
        </>
    )
}