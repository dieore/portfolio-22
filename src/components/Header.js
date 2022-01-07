const Header = () => {
    return (
        <header id="home" className="grid place-items-center place-content-evenly sm:grid-cols-2 h-96 text-white font-light">
            <div className="flex flex-col text-center sm:text-left font-medium">
                <h1 className="sm:text-4xl text-2xl tracking-wider">DIEGO OREFICI</h1>
                <h2 className="sm:text-2xl text-lg tracking-wider">Developer</h2>
            </div>
            <hr className="w-4/5 sm:hidden"/>
            <div className="sm:text-lg text tracking-wider text-center border-0 sm:text-left sm:border-l sm:p-6">
                <h3 className="font-medium">HI THERE AND WELCOME TO MY WEBSITE</h3>
                <h3>Here you can check some of my skills, habilities and experience.</h3>
                <h3>¡Thanks for stopping by!</h3>
            </div>
        </header>
    )
}

export default Header;