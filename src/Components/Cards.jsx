import medal from "../../src/assets/Medal.png"
import token from "../../src/assets/Token.png"
import wallet from "../../src/assets/Wallet.png"
import like from "../../src/assets/Like.png"
import shopping from "../../src/assets/Shopping bag.png"

const Cards = () => {
    return (
        <div>
            <h2 data-aos="zoom-in" className="lg:block hidden text-[90px] font-bold text-center uppercase pt-48  text-transparent  bg-clip-text bg-gradient-to-l from-[#15E8BA] via-[#487EBB] to-[#604DBC]">Simplicity <span>{">>>"}</span> Jargon</h2>

            <h2 data-aos="zoom-in" className="lg:hidden leading-none pb-14 pl-5 p-10 text-[30px] font-bold text-left uppercase pt-10  text-transparent  bg-clip-text bg-gradient-to-l from-[#15E8BA] via-[#487EBB] to-[#604DBC]"><span>Simplicity </span><br /><span className="text-left pl-48">{">>>"}</span> <br /> <span className="text-right pl-40">Jargon</span></h2>

            <p data-aos="zoom-in" data-aos-duration="1000" className="text-center text-[18px] font-normal  lg:max-w-full max-w-sm pb-14 mx-auto lg:text-[25px] text-white">We take care of everything so the artists can focus on what they do best. <span className="font-semibold">Create art.</span></p>


            <div >
                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto  lg:max-w-7xl sm:px-6 lg:px-8">

                        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-2  gap-y-6">
                            <div data-aos="zoom-in" data-aos-duration="1100" className=" mx-auto lg:w-[400px] w-[350px] bg-[#222125] rounded-[50px] shadow">
                                <div className="px-8  py-12">
                                    <div className="  mx-auto">
                                        <img className=" mx-auto -mt-28  " src={medal} alt="" />
                                    </div>
                                    <h1 className="text-[28px] font-bold mt-7 text-white" >Pre-NFT Rights</h1>
                                    <p className="text-lg font-normal text-white mt-4">NFT rights enable your audience to build content around you and pay you as well as share royalties. </p>

                                    <button className="btn font mt-24 px-8 py-3 text-[14px] font-semibold rounded-full  text-[#00CDAC] bg-[#2E2D32]">Beta Launch Dec 13</button>
                                </div>
                            </div>


                            <div data-aos="zoom-in" data-aos-duration="1300" className="lg:mt-0 mt-14 bg-[#222125] mx-auto lg:w-[400px] w-[350px] rounded-[50px] shadow">
                                <div className="px-8  py-12">
                                    <div className="  mx-auto">
                                        <img className=" mx-auto -mt-28  " src={token} alt="" />
                                    </div>
                                    <h1 className="text-[28px] font-bold mt-20 text-white" >Talent Tokens</h1>
                                    <p className="text-lg font-normal text-white mt-4">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey. </p>

                                    <button className="btn font mt-16 px-8 py-3 text-[14px] font-semibold rounded-full  text-[#8E79F3] bg-[#2E2D32]">Coming Soon</button>
                                </div>
                            </div>


                            <div data-aos="zoom-in" data-aos-duration="1500" className="lg:mt-0 mt-14 bg-[#222125] mx-auto lg:w-[400px] w-[350px] rounded-[50px] shadow">
                                <div className="px-8  py-12">
                                    <div className="  mx-auto">
                                        <img className=" mx-auto -mt-28  " src={wallet} alt="" />
                                    </div>
                                    <h1 className="text-[28px] font-bold mt-20 text-white" >Tokenised
                                        Crowdfunding</h1>
                                    <p className="text-lg font-normal text-white mt-4">Tokenised crowdfunding allows creators to raise capital to improve the quality of their content. </p>

                                    <button className="btn font mt-14 px-8 py-3 text-[14px] font-semibold rounded-full  text-[#8E79F3] bg-[#2E2D32]">Coming Soon</button>
                                </div>
                            </div>


                        </div>
                        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center  lg:max-w-[800px] sm:mt-12 lg:mt-28 lg:grid-cols-2 gap-6  gap-y-6">
                            <div data-aos="zoom-in" data-aos-duration="1700" className="lg:mt-0 mt-14 bg-[#222125] mx-auto lg:w-[400px] w-[350px] rounded-[50px] shadow">
                                <div className="px-8  py-12">
                                    <div className="  mx-auto">
                                        <img className=" mx-auto -mt-28  " src={like} alt="" />
                                    </div>
                                    <h1 className="text-[28px] font-bold mt-7 text-white" >Talent Content
                                        Platform</h1>
                                    <p className="text-lg font-normal text-white mt-4">NFT rights enable your audience to build content around you and pay you as well as share royalties. </p>

                                    <button className="btn font mt-24 px-8 py-3 text-[14px] font-semibold rounded-full  text-[#8E79F3]  bg-[#2E2D32]">Coming Soon</button>
                                </div>
                            </div>


                            <div data-aos="zoom-in" data-aos-duration="1900" className=" bg-[#222125] mx-auto lg:w-[400px] w-[350px] lg:mt-0 mt-14 rounded-[50px] shadow">
                                <div className="px-8  py-12">

                                    <div className=" lg:hidden block mx-auto">
                                        <img className=" mx-auto -mt-28  " src={shopping} alt="" />
                                    </div>

                                    <h1 className="text-[28px] font-bold mt-14 text-white" >NFT <br />
                                        Marketplace</h1>
                                    <p className="text-lg font-normal text-white mt-4">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey. </p>

                                    <button className="btn font mt-16 px-8 py-3 text-[14px] font-semibold rounded-full  text-[#00CDAC] bg-[#2E2D32]">Beta Launch Dec 13</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

            </div>


        </div>
    );
};

export default Cards;