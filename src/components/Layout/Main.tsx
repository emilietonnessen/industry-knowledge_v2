interface MainProps {
    children: React.ReactNode;
    page: "landingpage" | "portfolio" | "about" | "contact";
}

const Main: React.FC<MainProps> = ({children, page}) => (
    <main className={`main ${page}`}>
        {children}
    </main>
);

export default Main;