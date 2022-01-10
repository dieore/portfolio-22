import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [message, setMessage] = useState({
        email: "",
        body: ""
    });
    const [loader, setLoader] = useState(false);

    const handleForm = (e) => {
        const { name, value } = e.target;

        setMessage({
            ...message,
            [name]: value
        })
    };

    const sendForm = async () => {
        const { email, body } = message;

        if (!email.includes("@")) return toast("Please, insert a valid email");
        if (!email.length || !body.length) return toast("Uncomplete fields");

        setLoader(true);
        const res = await emailjs.send('service_gh7y2on', 'gmail_ID', message, 'user_Sh3DIijVkb9WcVD8fiYIS');
        setLoader(false);

        if (res.status === 200) {
            toast("¡Thanks for email me! I'll get in touch as soon as posible.")
        } else {
            toast("Error. Please, try again.")
        }
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 sm:place-items-center place-content-center sm:p-6 bg-blue text-white font-light">
            <div className="h-72 p-6 flex flex-col justify-between tracking-wide">
                <div className="flex items-center">
                    <img className="w-6 h-6" src="/img/linkedin.png" />
                    <p className="cursor-pointer pl-3 hover:underline" onClick={() => window.open("https://www.linkedin.com/in/diegoore/")}>diegoore</p>
                </div>
                <div className="flex items-center">
                    <img className="w-6 h-6" src="/img/github.png" />
                    <p className="cursor-pointer pl-3 hover:underline" onClick={() => window.open("https://www.github.com/dieore")}>dieore</p>
                </div>
                <div className="flex items-center">
                    <img className="w-6 h-6" src="/img/email.png" />
                    <p className="pl-3 hover:underline">orefici.diego@gmail.com</p>
                </div>
                <div className="flex items-center">
                    <img className="w-6 h-6" src="/img/whatsapp.png" />
                    <p className="cursor-pointer pl-3 hover:underline" onClick={() => window.open("https://api.whatsapp.com/send?phone=543413181724")}>+54 341 3 181 724</p>
                </div>
            </div>
            <div className="text-blue flex flex-col p-6">
                <input
                    placeholder="Your email *"
                    className="outline-none w-full sm:w-96 placeholder:text-blue p-3 bg-light-gray-200 focus:bg-white mb-4"
                    onChange={handleForm}
                    name="email"
                    value={message.email}
                />
                <textarea
                    rows={8}
                    placeholder="Leave me a message *"
                    className="outline-none w-full sm:w-96 placeholder:text-blue p-3 bg-light-gray-200 focus:bg-white"
                    onChange={handleForm}
                    name="body"
                    value={message.body}
                />
                <button
                    className="bg-gray p-3 rounded mt-6 text-white text-sm hover:bg-opacity-80"
                    disabled={loader}
                    onClick={() => sendForm()}
                >
                    {
                        loader ? <p className="animate-pulse">SENDING...</p> : <p>SEND</p>
                    }
                </button>
            </div>
            <ToastContainer position="bottom-center" toastStyle={{ backgroundColor: "rgb(16, 38, 65)", color: "white" }}  />
        </section>
    )
}

export default Contact;