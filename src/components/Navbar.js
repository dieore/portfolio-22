const Navbar = () => {
    return (
        <nav className="sm:p-6 p-3 sticky top-0 bg-blue bg-opacity-20">
            <ul className="hidden sm:grid grid-cols-3 place-items-center text-white">
                <li className="hover:underline hover:underline-offset-8">ABOUT</li>
                <li className="hover:underline hover:underline-offset-8">SKILLS</li>
                <li className="hover:underline hover:underline-offset-8">CONTACT</li>
            </ul>
            <div className="flex justify-between items-center sm:hidden">
                <h5 className="text-white font-mono">Diego Orefici</h5>
                <img className="w-8" src="/img/burguer.png" />
            </div>
        </nav>
    )
}

export default Navbar;