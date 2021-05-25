import Project from '../components/project/Project';
import Search from '../components/Search';
import projectsJSON from '../server/projects';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
//import Modal from '../components/Modal.tsx';


const Portfolio = () => {
    const projectsArray = projectsJSON;
    const magnifyingGlass = <i className="far fa-search"></i>;
    const cross = <i className="fal fa-times"></i>;
    const [projects, setProjects] = useState<any>([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchFocus , setSearchFocus] = useState(false);
    const [searchIcon, setSearchIcon] = useState(magnifyingGlass);
    let search = searchValue.trim().toLowerCase();

    const changeSearchFocus = () => {
        if(searchFocus) {
            setSearchIcon(cross);
        }
        if(!searchFocus) {
            setSearchIcon(magnifyingGlass);
        }
    }
    
    // Sets the state
    useEffect(() => {
        setProjects(projectsArray);
        changeSearchFocus();
    
        if(search.length > 0) {
            setProjects(projectsArray.filter(project => {
                return project.name.toLowerCase().match(search);
            }));
        } if (search.length === 0) {
            setProjects(projectsArray);
        }

        /* if(!searchFocus || search.length === 0) {
            setSearchIcon(magnifyingGlass);
        } */
        // eslint-disable-line react-hooks/exhaustive-deps
    }, []);

    const searchHandler = (e: any) => {
        setSearchValue(e.target.value);
        setSearchIcon(cross);
        setSearchFocus(true)
    }

    //console.log(projects);
    /* const searchInput = useRef(null);

    if(document.activeElement === searchInput.current) {
        console.log('active focus');
    } */
    const onFocus = () => setSearchFocus(true);
    const onBlur = () => setSearchFocus(false);

    return (
        <Element name="portfolio" className="portfolio">
            {/* <div  id="portfolio"> */}
            <h2 className="headline headline--primary">
                Portfolio
                <span></span>
            </h2>
            
            <Search
                onClick={() => changeSearchFocus()}
                onFocus={onFocus}
                onBlur={onBlur}
                search={searchHandler}
                icon={searchIcon} />

            <div className="projects">
                {projects.map((project: any) => {
                    return (
                        <Project 
                            key={project.id}
                            image={project.thumbnail}
                            title={project.name}
                            github={project.github} />
                    );
                })}
            </div>

            {/* <Modal
                headline="Risør Klatreklubb"
                demo="livelink"
                github="github" /> */}
        {/* </div> */}
        </Element>
    );
        
        
}

export default Portfolio;