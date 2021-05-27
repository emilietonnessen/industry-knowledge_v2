interface ButtonProps {
    children: React.ReactNode;
    link: string;
    download?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({children, link, download, type}) => (
    <button className="btn" type={type}>
        <a href={link} download={download} >
            {children}
        </a>
    </button>
);

export default Button;

interface ButtonLinkProps {
    children: React.ReactNode;
    link: string;
    download?: boolean;
    theme: "primary" | "github";
    size: "cta" | "lg" | "md" | "sm";
}


export const ButtonLink: React.FC<ButtonLinkProps> = ({children, link, download, theme, size}) => (
    <a href={link} download={download} className={`btn btn--${theme} btn--${size}`}>
        {children}
    </a>
);