import { useEffect, useState } from "react";

const Navbar = () => {
    const onScrollDown = "sm:p-6 p-3 sticky top-0 bg-blue bg-opacity-90";
    const onScrollTop = "sm:p-6 p-3 sticky top-0";

    const [navigationBackground, setNavigationBackground] = useState(onScrollTop);

    const handleScroll = () => {
        const show = window.scrollY > 310;

        if (show) {
            setNavigationBackground(onScrollDown);
        } else {
            setNavigationBackground(onScrollTop);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <nav className={navigationBackground}>
            <ul className="hidden sm:grid grid-cols-4 place-items-center text-white">
                <li className="hover:underline hover:underline-offset-8">HOME</li>
                <li className="hover:underline hover:underline-offset-8">ABOUT</li>
                <li className="hover:underline hover:underline-offset-8">SKILLS</li>
                <li className="hover:underline hover:underline-offset-8">CONTACT</li>
            </ul>
            <div className="flex justify-center sm:hidden">
                <img className="w-8" src="/img/burguer.png" />
            </div>
        </nav>
    )
}

export default Navbar;