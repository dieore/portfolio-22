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
                    <div className="overflow-auto fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 z-50">
                        <button onClick={() => {
                            setShow(false);
                            setStateFromComponent(false)
                        }}
                            className=" hover:bg-opacity-80 outline-none fixed bottom-10 right-10 p-3 z-50 border-white border bg-red text-white"
                        >
                            CLOSE
                        </button>
                        <>
                            {children}
                        </>
                    </div>
                )
            }
        </>
    )
};

export default Modal;