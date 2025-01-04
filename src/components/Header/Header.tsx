import {FC} from "react";

interface HeaderProps {
    title: string;
    isLoggedIn?: boolean;
}

const Header: FC<HeaderProps> = ({title, isLoggedIn}) => {
    return <div className="header">
        <h1>{title}</h1>
        {isLoggedIn ? <button>Play</button> : <button>Login</button>}
    </div>
}

export default Header;