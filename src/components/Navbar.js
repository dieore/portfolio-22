import { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
    const onScrollDown = "sm:p-6 p-3 sticky top-0 bg-blue bg-opacity-90";
    const onScrollTop = "sm:p-6 p-3 sticky top-0";

    const [navigationBackground, setNavigationBackground] = useState(onScrollTop);
    const [showCV, setShowCV] = useState(false);

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
        <>
            <nav className={navigationBackground}>
                <ul className="hidden sm:grid grid-cols-2 text-white">
                    <div>
                        <button onClick={() => setShowCV(true)} className="bg-light-blue border p-3 hover:bg-light-gray cursor-pointer text-sm">WATCH MY CV</button>
                    </div>
                    <div className="flex justify-around items-center">
                        <a href="#home" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">HOME</a>
                        <a href="#about" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">ABOUT</a>
                        <a href="#skills" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">SKILLS</a>
                        <a href="#contact" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">CONTACT</a>
                    </div>
                </ul>
                <div className="flex justify-center sm:hidden">
                    <img className="w-8" src="/img/burguer.png" />
                </div>
            </nav>

            <Modal
                open={showCV}
                setStateFromComponent={setShowCV}
            >
                <img className="h-screen hover:scale-150" src="/img/cv.png" />
            </Modal>
        </>
    )
};

export default Navbar;