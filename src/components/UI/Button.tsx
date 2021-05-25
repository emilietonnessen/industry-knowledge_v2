interface ButtonProps {
    children: React.ReactNode;
    link: string;
    download?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({children, link, download, type}) => (
    <button className="btn" type={type}>
        <a href={link} download={download} className="btn__link">
            {children}
        </a>
    </button>
);

export default Button;