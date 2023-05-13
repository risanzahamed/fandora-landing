import nftCon from "../assets/nftContent.png"


const NftContent = () => {
    return (
        <div className="lg:m-0 m-5">
            <section className=" mx-auto  max-w-[1300px] bg-gradient-to-l rounded-3xl from-[#604DBC]  to-[#15E8BA] ">
                <div className="  mx-auto">
                    <div className="grid align-middle  grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
                        <div className=" px-[30px] py-[45px] lg:px-[84px] lg:py-[35px]">
                            <h1 className="lg:text-[35px] text-3xl  text-center lg:text-left font lg:mt-8 text-[#1B1B1D] font-bold">Pre-NFT Content and Rights Marketplace </h1>
                            <p className="mt-6 text-xl text-center lg:text-left leading-relaxed text-black">A first of its kind platform that  discovers and supports global talent across multiple domains, now live! </p>

                            <button className="btn lg:ml-0 ml-16 text-[16px] content-center text-center px-8 font font-semibold rounded-full uppercase py-5 lg:mt-4 mt-8 text-white bg-[#1B1B1D]">CHECK IT OUT</button>
                        </div>
                        <div>

                            <div >
                                <img className="w-[500px] -mb-12 -mt-12" src={nftCon} alt="" srcSet="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default NftContent;