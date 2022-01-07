import { useEffect, useState } from "react";

const Modal = ({ children, open, setStateFromComponent }) => {
    const [show, setShow] = useState(open);

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            setShow(false);
            setStateFromComponent(false);
        };
    };

    useEffect(() => {
        window.addEventListener("keydown", (e) => handleEscape(e))
        return () => handleEscape();
    }, [])

    return (
        <>
            {
                open && (
                    <div className="overflow-auto fixed w-full h-full bg-black bg-opacity-60 top-0 left-0">
                        <div className="grid place-items-center place-content-center h-screen">
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default Modal;