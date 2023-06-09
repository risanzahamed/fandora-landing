import  { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../src/assets/logo.png"
import menu from "../../src/assets/MENU.png"

const Header = () => {
   
    const [state, setState] = useState(false)
    const navRef = useRef()
    return (
        <div>
            <nav ref={navRef} className=" w-full lg:-mb-[140px] z-10 ">
                <div className="items-center  lg:max-w-[1250px] mx-auto lg:flex ">
                    <div className="flex z-40 items-center p-3 justify-between py-3 lg:py-4 lg:block">
                        <Link to='/'>
                            <img
                                className='p-2 z-10 lg:w-full w-56'
                                src={logo}

                                alt="Float UI logo"
                            />
                        </Link>

                     

                        <div className="lg:hidden">

                            <button className="text-[#1ADEBB] bg-[#08080900] p-3 outline-none  rounded-md "
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <img src={menu} alt="" srcSet="" />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-between z-40 flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>                        
                        <div className="flex-2">
                            <ul className="justify-center p-6 text-white font-semibold items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                <Link  cursor-pointer="false" className='p-3 ' to='/'><li>Home</li></Link>
                                <Link  cursor-pointer="true" className='p-3' to='/auction'><li>Auction</li></Link>
                                <Link  cursor-pointer="true" className='p-3' to='/feature'><li>Key Features</li></Link>
                                <Link  cursor-pointer="true" className='p-3' to='/pre-nft-rights'><li>Pre-NFT Rights</li></Link>
                                <Link  cursor-pointer="true" className='p-3' to='/marketplace'><li>Marketplace</li></Link>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>



        </div>

    );
};

export default Header;