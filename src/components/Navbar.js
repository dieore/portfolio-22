import { useEffect, useState } from "react";
import Modal from "./Modal";

const onScrollDown = "sm:p-6 p-3 sticky top-0 bg-blue bg-opacity-90";
const onScrollTop = "sm:p-6 p-3 sticky top-0";

const Navbar = () => {
    const [navigationBackground, setNavigationBackground] = useState(onScrollTop);
    const [showCV, setShowCV] = useState(false);
    const [open, setOpen] = useState(false);

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
                <div className="hidden sm:grid grid-cols-2 text-white">
                    <div>
                        <button onClick={() => setShowCV(true)} className="bg-light-blue border p-3 hover:bg-light-gray cursor-pointer text-sm">WATCH MY CV</button>
                    </div>
                    <ul className="flex justify-around items-center">
                        <a href="#home" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">HOME</a>
                        <a href="#about" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">ABOUT</a>
                        <a href="#skills" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">SKILLS</a>
                        <a href="#contact" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm">CONTACT</a>
                    </ul>
                </div>
                <div className="flex justify-between sm:hidden">
                    <button onClick={() => setShowCV(true)} className="text-white bg-light-blue border p-3 hover:bg-light-gray cursor-pointer text-sm">WATCH MY CV</button>
                    <img onClick={() => setOpen(!open)} className="w-8" src="/img/burguer.png" />
                </div>
            </nav>
            {
                open && (
                    <div className="fixed h-screen w-3/6 bg-blue bg-opacity-90 text-white">
                        <ul className="grid pl-3 pt-4 h-4/6">
                            <a onClick={() => setOpen(false)} href="#home" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm hover:font-medium">HOME</a>
                            <a onClick={() => setOpen(false)} href="#about" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm hover:font-medium">ABOUT</a>
                            <a onClick={() => setOpen(false)} href="#skills" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm hover:font-medium">SKILLS</a>
                            <a onClick={() => setOpen(false)} href="#contact" className="hover:underline hover:underline-offset-8 cursor-pointer text-sm hover:font-medium">CONTACT</a>
                        </ul>
                    </div>
                )
            }
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