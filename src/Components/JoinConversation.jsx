import image1 from "../../src/assets/TGN_4 2.png"
import image2 from "../../src/assets/TGN_5 1.png"
import vector from "../../src/assets/Vector.png"
const JoinConversation = () => {
    return (
        <div>
            <section className="py-10 bg-[#1B1B1D] sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="relative ">
                            <div className="lg:hidden block">
                                <h1 className="text-[14px] mt-4 lg:text-left text-center font-bold uppercase mb-4 leading-tight text-white sm:text-4xl lg:text-sm lg:leading-tight">Tokenised Crowdfunding</h1>
                                <h2 className=" lg:text-left text-center text-2xl mb-8 font-bold leading-tight text-[#538EB6] sm:text-4xl lg:text-4xl lg:leading-tight">Create content.
                                    Make money for everybody.</h2>
                            </div>

                            <img className=" rounded-md" src={image1} alt="" />

                        </div>

                        <div className="lg:max-w-[450px]">
                            <h1 className="text-3xl hidden lg:block font-bold uppercase mb-4 leading-tight text-white sm:text-4xl lg:text-sm lg:leading-tight">Tokenised Crowdfunding</h1>
                            <h2 className="hidden lg:block text-3xl font-bold leading-tight text-[#538EB6] sm:text-4xl lg:text-4xl lg:leading-tight">Create content.
                                Make money for everybody.</h2>
                            <p className="mt-6 lg:text-left text-center text-lg leading-relaxed text-white">With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.</p>


                            <button

                                className="btn mb-14 flex lg:ml-0 ml-14 text-[16px] content-center text-center px-8 font font-normal rounded-full uppercase py-5 lg:mt-8 mt-12 text-white bg-gradient-to-l  from-[#4e2fe8] to-[#38A1BB]">JOIN THE CONVERSATION
                                <img className="ml-4" src={vector} alt="" srcSet="" />

                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="lg:max-w-[500px]">
                            <h1 className=" text-[14px] mt-4 lg:text-left text-center font-bold uppercase mb-4 leading-tight text-white sm:text-4xl lg:text-sm lg:leading-tight">Talent content platform</h1>
                            <h2 className=" lg:text-left text-center text-2xl font-bold leading-tight text-[#538EB6] sm:text-4xl lg:text-4xl lg:leading-tight">Build your custom subscription platform</h2>

                            <div className="relative mt-6 mb-4 lg:hidden block">
                                <img className=" rounded-md" src={image2} alt="" />
                            </div>

                            <p className="mt-6 text-center lg:text-left text-lg leading-relaxed text-white">Build your custom subscription platform
                                Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs</p>

                            <button

                                className="btn flex lg:ml-0 ml-16 text-[16px] content-center text-center px-8 font font-normal rounded-full uppercase py-5 lg:mt-8 mt-12 text-white bg-gradient-to-l  from-[#4e2fe8] to-[#38A1BB]">JOIN THE CONVERSATION
                                <img className="ml-4" src={vector} alt="" srcSet="" />

                            </button>
                        </div>

                        <div className="relative lg:block hidden">
                            <img className=" rounded-md" src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default JoinConversation;