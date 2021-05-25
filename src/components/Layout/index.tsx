import { Helmet } from "react-helmet";

import Footer from "./Footer"
import Main from "./Main"
import Navigation from "./Navigation"


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Emilie Tonnessen - Junior Frontend Developer</title>
                <meta name="image" property="og:image" content="https://www.tonnessen.com/assets/thumbnail.png" />
                <meta name="author" content="Emilie Tønnessen" />
                <meta name="keyword" content="Oslo, Viken, Akershus, Bærum, Sandvika, Risør, Tvedestrand, Arendal, Gjerstad, Frontend, Frontend utvikler, Front-end web development, Web developer, Webutvikler, Web design, Junior frontend developer, Internet, Responsive webdesign, User friendly, Brukervennlig, Mobil, Mobile, Tablet, Nettbrett, Desktop, Laptop, Widescreen, Pc, Interaksjon design, Interaction design, UX design, IxD, UI design, Prototype, Wireframe, Adobe xd, Php, Javascript, Css, Sass, Html, Bootstrap, Wordpress, Microsoft office, Excel , Adobe xd, Photoshop, Illustrator, Emilie, Tønnessen, Tonnessen, Kathenes, Henriette, Emilie Henriette Kathenes Tønnessen, Emilie Henriette Tønnessen, Emilie Tonnessen" />
                <meta name="description" content="Emilie Tønnessen is a 25 year old student from Risør, currently living Bærum, Norway. She is currently studying Frontend Development at Noroff. Emilie implement visual and interactive elements to websites and applications, and make your designs come alive!" />
                <link rel="stylesheet" href="https://use.typekit.net/nnq4wta.css" />
                <script src="https://kit.fontawesome.com/0011017bbe.js" crossOrigin="anonymous" />
            </Helmet>

            <div className="layout">
                <Navigation />
                <Main>
                    {children}
                </Main>
                
                <Footer />
            </div>
        </>
    );
}

export default Layout;