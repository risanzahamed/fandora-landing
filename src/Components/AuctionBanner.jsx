import contenthero from "../../src/assets/content-hero.png"
import share from "../../src/assets/share.png"
import twitterNo from "../../src/assets/Twitter-no.png"
import instaNo from "../../src/assets/Instagram-no.png"
import linkedinNo from "../../src/assets/Linkedin-no.png"
import discordNo from "../../src/assets/Discord-no.png"
import clock from "../../src/assets/clock.png"
import actionPpBg from "../../src/assets/actionPpBg.png"
import downArrow from "../../src/assets/downArrow.png"
import listing from "../../src/assets/ListingBox.png"
import imageLs1 from "../../src/assets/imageLs1.png"
const AuctionBanner = () => {
    return (
        <div>
            <div className="px-4 lg:mt-40 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid align-top items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative lg:block hidden">
                        <img className=" rounded-md" src={contenthero} alt="" />

                        <section >
                            <div className="px-4  mx-auto sm:px-6 lg:px-8 lg:max-w-[1450px]">

                                <div className="max-w-3xl mx-auto space-y-4 ">
                                    <div className="  border border-[#69EACB] rounded-lg ">
                                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                            <span className="flex text-2xl font-semibold text-white"> Description </span>

                                            <img src={downArrow} alt="" srcSet="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section >
                            <div className="px-4 mt-4 mx-auto sm:px-6 lg:px-8 lg:max-w-[1450px]">

                                <div className="max-w-3xl mx-auto space-y-4 ">
                                    <div className="  border border-[#69EACB] rounded-lg ">
                                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                            <span className="flex text-2xl font-semibold text-white"> Rights Available </span>

                                            <img src={downArrow} alt="" srcSet="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section >
                            <div className="px-4 mt-4 mx-auto sm:px-6 lg:px-8 lg:max-w-[1450px]">

                                <div className="max-w-3xl mx-auto space-y-4 ">
                                    <div className="  border border-[#69EACB] rounded-lg ">
                                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                            <span className="flex text-2xl font-semibold text-white"> Utilities Offered </span>

                                            <img src={downArrow} alt="" srcSet="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </section>



                        <div >

                            <div className="grid lg:grid-cols-2 mt-[43px]">
                                <div>
                                    <form action="#" method="POST"  >
                                        <div className="lg:flex flex-col items-center sm:flex-row sm:justify-center">
                                            <div className="flex-1 w-full   sm:px-0">
                                                <div className=" text-gray-400 focus-within:text-gray-600">
                                                    <label htmlFor="email" className="sr-only"></label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Have a Question?"
                                                        className="block w-full rounded-full pl-14 pr-14 text-white rounded-e-none bg-[#07070F]  text-base  placeholder-white transition-all duration-200    focus:ring-1 border-2 p-2 border-[#74B4B3]"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                <div className="flex lg:mb-0 mb-10">
                                    <button type="submit" className="inline-flex pl-20 pr-14 items-center justify-center flex-shrink-0 w-auto  uppercase  mt-4 font-semibold text-white transition-all duration-200 bg-[#52C1B9] rounded-full rounded-s-none sm:mt-0  sm:w-auto ">
                                        POST A QUERY
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>



                    <div className="lg:max-w-[500px] ">
                        <div className="flex justify-between">
                            <h1 className=" text-[14px] mt-4  text-left font-normal font uppercase leading-tight text-white sm:text-lg lg:text-[20px] lg:leading-tight">Owned by <span className="font-bold text-[#52C1B9]">PSG</span></h1>

                            <button

                                className="btn lg:ml-14 mb-8 lg:mt-3  text-[14px] content-center text-center px-8 font font-normal rounded-md  uppercase py-3 bg-[#080710] border-2 border-[#52C1B9] text-white ">Mark as Favourite

                            </button>

                            <img className="w-[18.75px] h-[20.83px] lg:ml-14 mt-4  rounded-md" src={share} alt="" />
                        </div>
                        <h2 className="text-white text-2xl lg:text-4xl font-semibold mb-4">Lionel Messi: The GOAT</h2>
                        <div className="flex">
                            <div>
                                
                                <h2 className=" text-left  text-base font-bold leading-tight text-[#52C1B9] sm:text-4xl lg:text-xl font lg:leading-tight">ChromieMIX #7615</h2>
                            </div>


                            <div className="flex W-[140px] lg:mb-14 lg:ml-6">
                                <img src={twitterNo} alt="" />
                                <img src={linkedinNo} alt="" />
                                <img src={instaNo} alt="" />
                                <img src={discordNo} alt="" />
                            </div>
                        </div>

                        <div className="relative  lg:hidden block">
                            <img className=" rounded-md" src={contenthero} alt="" />
                        </div>


                        <div className="relative p-4 ">
                            <div className="absolute  inset-0 lg:mt-0 mt-14 lg:h-full max-h-full lg:block">
                                <img className="pb-48  h-[550px]" src={actionPpBg} alt="" />
                            </div>

                            <div className="relative pb-14">
                                <h1 className="text-white lg:pt-10 pt-24 font-bold text-[14px]">Auction Price</h1>
                                <div className="flex mt-8 ">
                                    <img className="w-[24px] lg:mr-4  h-[24px]" src={clock} alt="" srcSet="" />
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">Sale ends 25 December 2022 at 1:57 am GMT+5:30</h1>

                                </div>
                                <h1 className="text-white font font-normal mt-6 text-[16px]">Current Price</h1>
                                <h1 className="text-white font-bold mt-6 text-[30px]">15.89 ETH <span className="text-[16px] font-normal">$111,111.11</span></h1>


                                <div className="flex pb-14 mt-12">
                                    <button

                                        className="btn rounded-full lg:pr-14 lg:text-[14px] content-center text-center lg:pl-14 pl-4 pr-4 lg:px-8 font  uppercase py-3 bg-[#080710] font-bold  text-white bg-gradient-to-l  from-[#4e2fe8] to-[#38A1BB] ">BUY NOW

                                    </button>

                                    <button

                                        className="btn ml-14 lg:text-[14px] content-center text-center lg:pl-10 pl-4 pr-4 lg:px-8 font font-normal rounded-md  uppercase py-3 bg-[#080710] border-2 border-[#52C1B9] text-white ">MAKE AN OFFER

                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="relative p-4 ">
                            <div className="absolute  inset-0 lg:mt-0 mt-14 lg:h-full max-h-full lg:block">
                                <img className="pb-48 h-[550px]" src={listing} alt="" />
                            </div>
                            <div className="relative pb-14">
                                <h1 className="text-white  font-bold font text-[30px]">Listings</h1>
                                <hr className=" mt-4 border-gray-700" />
                                <div className="flex justify-between mt-5">
                                    <h1 className="text-white font font-normal mb-2 text-[14px]">User Details</h1>
                                    <h1 className="text-white font font-normal mb-2 text-[14px]">Volume</h1>
                                    <h1 className="text-white font font-normal mb-2 text-[14px]">Floor Price</h1>
                                    <h1 className="text-white font font-normal mb-2 text-[14px]">Items</h1>

                                </div>


                                <div className="flex justify-between mt-5">
                                    <div className="flex items-center space-x-3">
                                        <div className="">
                                            <img src={imageLs1} />
                                        </div>
                                        <div className="font-normal  text-white">Bored Ape <br /> Yacht Club</div>
                                    </div>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span  className="text-[#00FF57] mt-6 text-[16px] text-left">
                                        +50.20%
                                    </span></h1>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span className="text-[#00FF57] mt-6 text-[16px]">
                                        +50.20%
                                    </span></h1>
                                    
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">138</h1>

                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className="flex items-center space-x-3">
                                        <div className="">
                                            <img src={imageLs1} />
                                        </div>
                                        <div className="font-normal  text-white">Bored Ape <br /> Yacht Club</div>
                                    </div>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span  className="text-[#00FF57] mt-6 text-[16px] text-left">
                                        +50.20%
                                    </span></h1>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span className="text-[#00FF57] mt-6 text-[16px]">
                                        +50.20%
                                    </span></h1>
                                    
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">138</h1>

                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className="flex items-center space-x-3">
                                        <div className="">
                                            <img src={imageLs1} />
                                        </div>
                                        <div className="font-normal  text-white">Bored Ape <br /> Yacht Club</div>
                                    </div>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span  className="text-[#00FF57] mt-6 text-[16px] text-left">
                                        +50.20%
                                    </span></h1>
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">230.38 ETH <br /> <span className="text-[#00FF57] mt-6 text-[16px]">
                                        +50.20%
                                    </span></h1>
                                    
                                    <h1 className="text-white font font-normal mb-2 text-[18px]">138</h1>

                                </div>





                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
};

export default AuctionBanner;