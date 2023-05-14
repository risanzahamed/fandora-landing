const Newsletter = () => {
    return (
        <div>
            <section className="py-10 mt-14 bg-gradient-to-l rounded-3xl from-[#604DBC]  to-[#15E8BA] max-w-7xl mx-auto sm:py-16 ">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div  className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get More Updates</h2>
                        <p className=" mx-auto mt-4 text-lg leading-relaxed text-black">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p>
                    </div>

                    <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                <label htmlFor="email" className="sr-only"></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email to get started"
                                    className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    required
                                />
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-[#1E1E2D] border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto ">
                            JOIN FANDORA
                                <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    
                </div>
            </section>

        </div>
    );
};

export default Newsletter;