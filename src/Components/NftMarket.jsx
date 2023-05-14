import creator from "../../src/assets/creator.png"
import creator2 from "../../src/assets/Phone mockup 2.png"
import mockup from "../../src/assets/Tablet Mockup 1.png"
const NftMarket = () => {
    return (
        <div>
            <section className="bg-gradient-to-l  from-[#4e2fe8] via-[#a18eef] to-[#7F9ECF] pb-24 ">
                <div className="grid grid-cols1 lg:w-[1300px] mx-auto lg:grid-cols-2">
                    <div className=" inset-0">
                        <img data-aos="fade-right" className="object-cover  lg:block hidden " src={creator} alt="" />
                        <p className="text-xl text-center pt-14 lg:hidden block  uppercase text-white pb-4">NFT rights Marketplace</p>

                        <h2 className="text-3xl text-center lg:hidden block font-bold leading-tight text-white sm:text-4xl">Are you a Creator?</h2>
                        <img className="object-cover lg:ml-0 ml-12 block lg:hidden align-middle justify-center content-center text-center" src={creator2} alt="" />
                    </div>

                    <div className="flex items-center justify-center px-4 py-10  sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <p className="text-xl hidden lg:block uppercase text-white pb-4">NFT rights Marketplace</p>
                            <h2 className="text-3xl hidden lg:block font-bold leading-tight text-white sm:text-4xl">Are you a Creator?</h2>
                            <p className="lg:mt-4 text-lg lg:text-base lg:text-left text-center text-white">Now sell Pre NFT rights and monetise your existing content for Web3 applications</p>

                            <button className="btn flex justify-center align-middle content-center lg:ml-0 ml-28 text-[16px] text-center px-8 font font-semibold rounded-full uppercase py-5 lg:mt-4 mt-8 text-white bg-[#52C1B9]">CHECK IT OUT!</button>
                        </div>
                    </div>
                </div>





                <div className="grid grid-cols-1 lg:w-[1300px] mx-auto lg:grid-cols-2">

                    <div className="block lg:hidden inset-0">
                        <div className="lg:hidden block mt-8 mb-4">
                            <p className="text-xl text-center uppercase text-white pb-4">NFT rights Marketplace</p>
                            <h2 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl">Are you a WEB3 Pro?</h2>
                        </div>
                        <img data-aos="fade-right" data-aos-duration="900" className="object-cover " src={mockup} alt="" />
                    </div>

                    <div className="flex items-center justify-center px-4 py-10  sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <p className="text-xl hidden lg:block  uppercase text-white pb-4">NFT rights Marketplace</p>
                            <h2 className="text-3xl hidden lg:block font-bold leading-tight text-white sm:text-4xl">Are you a WEB3 Pro?</h2>
                            <p className="lg:mt-4 text-lg lg:text-base lg:text-left text-center text-white">Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities</p>

                            <button className="btn lg:ml-0 mt-8 text-[16px] content-center text-center px-8 font font-semibold rounded-full uppercase py-5 lg:mt-4 ml-28 text-white bg-[#52C1B9]">CHECK IT OUT!</button>
                        </div>
                    </div>


                    <div className="lg:block hidden inset-0">
                        <img data-aos="fade-left" data-aos-duration="1100" className="object-cover " src={mockup} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in"  className="block content-center justify-center align-middle text-center">
                    <h2 className="lg:text-lg mt-4 text-white uppercase text-center">homegrown Marketplace</h2>
                    <h2 className="lg:text-4xl text-2xl font-bold mt-4 text-white text-center">Explore an NFT Marketplace unlike any other</h2>
                    <p className="text-white text-lg text-center mt-4">Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</p>

                    <button className="btn  lg:ml-0  text-[16px] content-center text-center px-8 font font-normal rounded-full uppercase py-5 lg:mt-4 mt-12 text-white bg-[#606060]">COMING SOON</button>
                </div>


            </section>

        </div>
    );
};

export default NftMarket;