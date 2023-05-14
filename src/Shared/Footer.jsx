import logo from "../../src/assets/FANDORA LOGO.png"
import twitter from "../../src/assets/twitter.png"
import linkdd from "../../src/assets/linkdd.png"
import insta from "../../src/assets/insta.png"
import discord from "../../src/assets/discord.png"
import email from "../../src/assets/email.png"
import footerLogo from "../../src/assets/footerLogo.png"
const Footer = () => {
    return (
        <div>
            <section className="py-10  sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[1350px]">

                    <div className="lg:flex block items-center justify-between">
                        <img className="lg:block hidden" src={logo} alt="" />
                        <div className="flex items-center justify-center content-center">
                            <img className="block lg:hidden items-center justify-center content-center pb-6 pt-6" src={footerLogo} alt="" />
                        </div>

                        <ul className=" lg:flex block  justify-between ">

                            <div className="mt-4 text-center lg:mt-0">
                                <li>
                                    <a href="#" title="" className="text-base mt-4 lg:ml-14 font-semibold text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Home </a>
                                </li>
                            </div>
                            <div className="mt-4 text-center lg:mt-0">
                                <li>
                                    <a href="#" title="" className="text-base  lg:ml-14 font-semibold text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Key features </a>
                                </li>
                            </div>
                            <div className="mt-4 text-center lg:mt-0">
                                <li>
                                    <a href="#" title="" className="text-base lg:ml-14 font-semibold text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Pre-NFT Rights </a>
                                </li>
                            </div>
                            <div className="mt-4 text-center lg:mt-0">
                                <li>
                                    <a href="#" title="" className="text-base lg:ml-14 font-semibold  text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Marketplace </a>
                                </li>
                            </div>

                        </ul>
                    </div>


                    <hr className="mt-16 mb-10 border-gray-700" />

                    <div className="flex text-center  mt-4 flex-wrap items-center justify-between">
                        <div className="flex self-center items-center justify-center lg:pl-0 pl-14 lg:pb-0 pb-8">
                            <img className="ml-4 self-center" src={twitter} alt="" />
                            <img className="ml-4" src={linkdd} alt="" />
                            <img className="ml-4" src={insta} alt="" />
                            <img className="ml-4" src={discord} alt="" />
                            <img className="ml-4" src={email} alt="" />
                        </div>



                        <ul className=" lg:flex block items-center pl-14 justify-between  ">

                            <div>
                                <li>
                                    <a href="#" title="" className="text-base  mb-24 lg:ml-20 font-medium text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> reachus@fandora.app </a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="#" title="" className="text-base lg:ml-20 font-medium text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="#" title="" className="text-base lg:ml-20 font-medium text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms of use </a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="#" title="" className="text-base lg:ml-20 font-medium  text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> © Fandora 2022 - All rights reserved </a>
                                </li>
                            </div>

                        </ul>
                    </div>



                    <div className="lg:flex lg:mt-24 mt-6 block items-center justify-between">

                        <div>
                            <p className="text-base text-center lg:text-left lg:pt-0  font-medium text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Designed by @indiecreatorsco</p>
                        </div>


                        <div>

                            <p className="text-base text-center lg:text-left lg:pt-0 pt-6 lg:ml-20 font-medium text-[#fefefe65] transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</p>
                        </div>
                    </div>





                </div>
            </section>

        </div>
    );
};

export default Footer;