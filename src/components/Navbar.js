import InstaLogo from "../Images/Instagram.png";

export default function Navbar() {
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full mx-5 lg:mx-56">
                    <div className="flex items-center">
                    <div className="h-12 w-24">
                        <img src={InstaLogo} alt="Insta Logo" className="py-2"/>
                    </div>

                    <div className="hidden ml-48 lg:block">
                        <form className="flex items-center">   
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5" placeholder="Search" required />
                            </div>
                        </form>
                    </div>

                    <div className="absolute inset-y-4 right-10 lg:right-60">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded">
                        Log In
                    </button>
                    <button className="ml-2 bg-white-500 hover:bg-white-700 text-blue-500 font-medium text-sm py-1 px-2 rounded">
                        Sign Up
                    </button>
                    </div>
                    
                    </div>
                </div>
                </nav>
            </header>
        </div>
    );
}