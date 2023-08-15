const Nav = ({ setCategories, data }) => {

    const uniqueCategories = [...new Set(data.map(item => item.category))];
    uniqueCategories.unshift("All");

    const setCategory = (category) => {
        if (category === "All") {
            setCategories("");
        } else {
            setCategories(category);
        }
    }

    return (
        <nav className="" style={{ background: '#F6B909' }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Menu</span>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        {uniqueCategories.map((category, index) => (
                            <li key={index}>
                                <span onClick={()=>setCategory(category)}
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-white bg-black-400 rounded md:bg-transparent md:text-black-400 md:p-0 md:dark:text-black-400 dark:bg-black-400 md:dark:bg-transparent" aria-current="page">
                                    {category}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;