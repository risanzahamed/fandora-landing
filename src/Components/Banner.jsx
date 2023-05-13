import { Link } from "react-router-dom";
import heroImg from "../../src/assets/bg-heroo.png"
import line from "../../src/assets/Line.png"
import google from "../../src/assets/google.png"
import linkdin from "../../src/assets/linkdin.png"
import facebook from "../../src/assets/facebook.png"

const Banner = () => {
    return (
        <div>
            <section className="bg-[#07070F] mx-auto">
                <div className="relative  sm:pt-16 lg:py-20 xl:py-48">
                    <div className="absolute inset-0 lg:mt-0 mt-14 lg:h-full max-h-full lg:block">
                        <img src={heroImg} alt="" />
                    </div>
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-24 max-w-[1440px]">

                        
                        <div className=" mx-auto text-center lg:mx-0 lg:max-w-[1178px]  lg:text-left">
                            <h1 className="mt-8 lg:mt-0 uppercase text-white text-4xl leading-snug lg:font-semibold  font-bold  sm:text-5xl xl:text-[140px]">

                                Calling  Creators of the Future

                            </h1>
                            <p className="pt-48 max-w-[400px] lg:text-[25px] text-[20px] text-[#52C1B9] mt-6 lg:pt-10 lg:pb-6 lg:font-normal font-semibold">The World’s First Pre-NFT Rights  and Content Marketplace</p>

                            <div className="mt-8 sm:mt-12">
                                <Link
                                    to='/now-live'
                                    aria-label='NOW LIVE'
                                    title='NOW LIVE'
                                    className="btn btn-outline btn-success rounded-full px-5 py-2 text-[#52C1B9]  border-[#52C1B9] text-[14px] font-semibold border-2"

                                >
                                    NOW LIVE
                                </Link>
                            </div>
                        </div>

                        <div className="lg:mt-60">
                            <p className=" lg:text-[25px] mt-20 text-center font-semibold z-40 text-[#52C1B9] lg:mt-6 lg:pt-10 lg:pb-6 lg:font-normal">Know about the launch before everyone else</p>


                            <div className="grid lg:grid-cols-2 mt-[43px]">
                                <div>
                                    <form action="#" method="POST"  >
                                        <div className="lg:flex flex-col items-center sm:flex-row sm:justify-center">
                                            <div className="flex-1 w-full min-w-0  sm:px-0">
                                                <div className=" text-gray-400 focus-within:text-gray-600">
                                                    <label htmlFor="email" className="sr-only"></label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Enter Email Here"
                                                        className="block w-full lg:mr-24 bg-[#07070F] py-3 lg:py-5 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200  rounded-full  focus:ring-1 border-4 border-[#74B4B3]"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                <div className="flex lg:mb-0 mb-10">
                                    <button type="submit" className="inline-flex lg:ml-[24px]  items-center justify-center flex-shrink-0 w-auto px-[70px] py-[10px] lg:px-[83px] lg:py-[20px] uppercase  mt-4 font-semibold text-white transition-all duration-200  bg-gradient-to-l rounded-full from-[#604DBC]  to-[#38A1BB] sm:mt-0  sm:w-auto ">
                                        sign up
                                    </button>

                                    <div className="flex lg:ml-8 justify-between">
                                        <img className="mr-8 lg:block hidden" src={line} alt="" srcSet="" />
                                        <img className="mr-2 lg:ml-0 ml-8 w-[43.74px] lg:mt-0 mt-4  lg:h-auto h-[42.03px]  lg:w-[75.74px]" src={google} alt="" srcSet="" />
                                        <img className="mr-2 w-[43.74px] lg:mt-0 mt-4  lg:h-auto h-[42.03px]  lg:w-[75.74px]" src={linkdin} alt="" srcSet="" />
                                        <img className="mr-2 w-[43.74px] lg:mt-0 mt-4  lg:h-auto h-[42.03px]  lg:w-[75.74px]" src={facebook} alt="" srcSet="" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Banner;