import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

const Navbar = () => {
    const user = useAuth();

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setwindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        if (windowWidth > 767) {
            setNav(false);
        }
    }, [windowWidth]);

    const admin = user.vinculo === "Admin";

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-lgreen">
                <Link to={"/"}>BE FIT.</Link>
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link to={"/sobre"}>Sobre</Link>
                </li>
                {!user.email && (
                    <li className="p-4">
                        <Link to={"/login"}>Login</Link>
                    </li>
                )}
                {user.email && (
                    <li className="p-4">
                        <button onClick={user.logout}>Logout</button>
                    </li>
                )}
                <li className="p-4">
                    <Link to={"/contatos"}>Contatos</Link>
                </li>
                {user.vinculo === "Cliente" ||
                    (admin && (
                        <li className="p-4">
                            <Link to={"/profile"}>Profile</Link>
                        </li>
                    ))}
                {user.vinculo === "Secretário(a)" ||
                    (admin && (
                        <li className="p-4">
                            <Link to={"/cadastro"}>Cadastro</Link>
                        </li>
                    ))}
                {user.vinculo === "Professor(a)" ||
                    (admin && (
                        <li className="p-4 text-center">
                            <Link to={"/registro-treino"}>Registro Treino</Link>
                        </li>
                    ))}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={` divide-y divide-gray-600
                    ${
                        nav
                            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-lblack ease-in-out duration-500"
                            : "ease-in-out duration-500 fixed left-[-100%]"
                    }`}
            >
                <h1 className="w-full text-3xl font-bold text-lgreen m-4">
                    BE FIT.
                </h1>
                <li className="p-4">
                    <Link to={"/login"}>Login</Link>
                </li>
                <li className="p-4">
                    <Link to={"/sobre"}>Sobre</Link>
                </li>
                <li className="p-4">
                    <Link to={"/contatos"}>Contatos</Link>
                </li>
                <li className="p-4">
                    <Link to={"/profile"}>Profile</Link>
                </li>

                <li className="p-4">
                    <Link to={"/cadastro"}>Cadastro</Link>
                </li>

                <li className="p-4">
                    <Link to={"/registro-treino"}>Registro Treino</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
