import { useContext, useEffect } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landingpage from "./pages/Landingpage";
import Portfolio from "./pages/Portfolio";
import ProjectsContext from './context/ProjectsContext';
import projectsArray from './server/projects';


const App: React.FC = () => {
    const [projects, setProjects]: any = useContext(ProjectsContext);

    useEffect(() => {
        setProjects(projectsArray);
    }, [projects, setProjects]);


    console.log("[projects]", projects);

    return (
        <Layout page="landingpage">
            <Landingpage />
            <Portfolio />
            <About />
            <Contact />
        </Layout>
    );
}

export default App;