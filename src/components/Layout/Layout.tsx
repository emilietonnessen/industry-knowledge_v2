import Footer from "./Footer"
import Main from "./Main"
import Sidebar from "./nav/Sidebar"

interface LayoutProps {
    children: React.ReactNode;
    page: "landingpage" | "portfolio" | "about" | "contact";
}

const Layout: React.FC<LayoutProps> = ({page, children}) => {
    return (
        <>
        
        <div className="layout">
            <div className="wrapper">
                <Sidebar />
                <Main page={page} >
                    {children}
                </Main>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default Layout;