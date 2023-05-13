import footersc from "../assets/nftfoot.png"
const FooterSection = () => {
    return (
        <div>
            <div className="lg:m-0 p-4 z-0 m-5">
                <section className=" mx-auto z-0  max-w-[1300px]  rounded-3xl bg-white ">
                    <div className=" z-0 mx-auto">
                        <div className="grid align-middle  grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
                            <div className="lg:max-w-[500px] px-[30px] py-[45px] lg:px-[84px] lg:py-[35px]">
                                <h1 className="lg:text-[35px] text-3xl  text-center lg:text-left font lg:mt-8 text-[#1B1B1D] font-bold">Discover and sell
                                    your own NFTs</h1>
                                <p className="mt-6 text-xl text-center lg:text-left leading-relaxed text-black">Join fandora and support outstanding global talent across multiple domains.</p>
                                <button

                                    className="btn lg:ml-0 ml-16 text-[16px] content-center text-center px-8 font font-normal rounded-full uppercase py-5 lg:mt-8 mt-4 text-white bg-gradient-to-l  from-[#4e2fe8] to-[#38A1BB]">JOIN FANDORA
                                </button>
                            </div>
                            <div>

                                <div >
                                    <img className="image lg:w-[800px] lg:pr-4 p-6 lg:-mb-12 lg:-mt-12   -mb-16 -mt-16  " src={footersc} alt="" srcSet="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>




        </div>
    );
};

export default FooterSection;