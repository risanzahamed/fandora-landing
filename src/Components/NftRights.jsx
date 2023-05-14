import digital from "../../src/assets/digital.png"
import gaming from "../../src/assets/gaming.png"
import talent from "../../src/assets/talent.png"
import online from "../../src/assets/online.png"
import product from "../../src/assets/product.png"
const NftRights = () => {

    return (
        <div>
            <section className="py-10 bg-[#EFEDF5] rounded-[80px] rounded-b-none sm:py-16 lg:py-24">
                <div className="px-4 mx-auto  sm:px-6 lg:px-8">
                    <div className=" mx-auto text-center">
                        <h2 data-aos="zoom-in" className="text-3xl lg:5t-0 mt-5 uppercase font-bold leading-relaxed text-black sm:text-4xl lg:text-8xl">Welcome to the Future <br />
                            <span className="text-transparent lg:text-8xl text-4xl bg-clip-text bg-gradient-to-l from-[#15E8BA] via-[#487EBB] to-[#604DBC] mt-4">Pre NFT Rights</span></h2>
                        <p  data-aos="zoom-in" data-aos-duration="1000" className="max-w-[1200px] font-medium mt-7 text-lg lg:text-[25px] mx-auto
                     leading-relaxed text-black">

                            Imagine a real life auction, but everything is an NFT. <br />
                            Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do all this easily - without all the tech-speak.
                        </p>

                        <p  data-aos="zoom-in" data-aos-duration="1200" className="font-semibold mt-14 text-[25px] mx-auto
                     leading-relaxed text-[#438ABC]">These are the different types of NFT rights you can sell</p>
                    </div>

                    <div>
                        <section className="py-10 sm:py-16 lg:py-24">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                                <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-[1000px] sm:mt-12 lg: lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
                                    <div data-aos="zoom-in" data-aos-duration="1100" className="mx-auto lg:w-full w-[300px] bg-[#FAF9FD] pb-5 pt-3 shadow-xl rounded-[50px]">
                                        <div className="p-5">
                                            <div className="  mx-auto">
                                                <img className=" mx-auto   " src={talent} alt="" />
                                            </div>
                                            <h1 className="text-[28px] font uppercase leading-normal font-bold mt-7 text-black" >Future Talent <br />
                                                NFT</h1>
                                            <p className="text-lg font-normal text-black mt-4">NPre-buy rights to your social media content</p>


                                        </div>
                                    </div>


                                    <div data-aos="zoom-in" data-aos-duration="1300" className="mx-auto lg:w-full w-[300px] bg-[#FAF9FD] pb-5 pt-3 shadow-xl rounded-[50px]">
                                        <div className="p-5">
                                            <div className="  mx-auto">
                                                <img className=" mx-auto   " src={product} alt="" />
                                            </div>
                                            <h1 className="text-[28px] font uppercase leading-normal font-bold mt-7  text-black" >Product <br />
                                                Placement NFT</h1>
                                            <p className="text-lg font-normal text-black mt-4">Pre-buy rights to your product mentions</p>


                                        </div>
                                    </div>


                                    <div data-aos="zoom-in" data-aos-duration="1500" className="mx-auto lg:w-full w-[300px] bg-[#FAF9FD] pb-5 pt-3 shadow-xl rounded-[50px]">
                                        <div className="p-5">
                                            <div className="  mx-auto">
                                                <img className=" mx-auto   " src={online} alt="" />
                                            </div>
                                            <h1 className="text-[28px] font uppercase leading-normal font-bold mt-7  text-black" >Online <br /> Interaction NFT
                                            </h1>
                                            <p className="text-lg font-normal text-black mt-4">Pre-buy rights to specific time periods for exclusive interactions</p>

                                        </div>
                                    </div>


                                </div>
                                <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center  lg:max-w-[650px] sm:mt-12 lg:mt-14 lg:grid-cols-2 gap-x-6 xl:gap-x-12 gap-y-6">
                                    <div data-aos="zoom-in" data-aos-duration="1700" className="mx-auto lg:w-full w-[300px] bg-[#FAF9FD] pb-5 pt-3 shadow-xl rounded-[50px]">
                                        <div className="p-5">
                                            <div className="  mx-auto">
                                                <img className=" mx-auto   " src={digital} alt="" />
                                            </div>
                                            <h1 className="text-[28px] font uppercase leading-normal  font-bold mt-7  text-black" >Talent Content
                                                <br />  Platform</h1>
                                            <p className="text-lg font-normal text-black mt-4">Pre-buy rights to create digital art featuring you</p>

                                        </div>
                                    </div>


                                    <div data-aos="zoom-in" data-aos-duration="1900" className="mx-auto lg:w-full w-[300px] bg-[#FAF9FD] pb-5 pt-3 shadow-xl rounded-[50px]">
                                        <div className="p-5">
                                            <div className="  mx-auto">
                                                <img className=" mx-auto   " src={gaming} alt="" />
                                            </div>

                                            <h1 className="text-[28px] font uppercase leading-normal  font-bold mt-7  text-black" >Gaming <br />
                                                NFT</h1>
                                            <p className="text-lg font-normal text-black mt-4">Pre-buy rights to incorporate your digital avatar in a game or product</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            
                        </section>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default NftRights;