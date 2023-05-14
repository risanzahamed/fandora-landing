import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import check1 from "../../src/assets/check1.png"
import check2 from "../../src/assets/check2.png"
import check3 from "../../src/assets/check3.png"
const CheckOutSlider = () => {
    return (
        <div>
            <div>
                <h2 className=" lg:text-[80px] text-[40px] font-bold text-center uppercase lg:p-0 p-10 lg:pt-24 lg:pb-24  text-transparent  bg-clip-text bg-gradient-to-r from-[#6143F3]  to-[#15E8BA]">if you liked this, check out</h2>

                <div data-aos="zoom-in" data-aos-duration="1300">
                    <div className="flex items-center mx-auto justify-center  sm:py-8 ">
                        {/* Carousel for desktop and large size devices */}
                        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={3} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8  cursor-pointer" id="prev">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider >
                                        <div id="slider" className="h-full mx-auto flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Studios</h2>
                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Creators</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check3} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Brands</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 " id="next">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for tablet and medium size devices */}
                        <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider >
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Studios</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Creators</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check3} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Brands</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>


                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                    <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for mobile and Small size Devices */}
                        <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 " id="prev">
                                    <svg width={58} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider >
                                        <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Studios</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Creators</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                    <div>
                                                        <img src={check3} alt="black chair and white table" className="object-cover object-center w-full" />
                                                    </div>

                                                    <div className=' mt-6'>

                                                        <div>
                                                            <h2 className='text-center font-semibold  text-xl text-white'>By Brandss</h2>

                                                        </div>


                                                    </div>

                                                </div>
                                            </Slide>


                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 " id="next">
                                    <svg width={58} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>
                </div>

                <div className='block mt-14 content-center justify-center align-middle text-center'>

                    <button

                        className="btn  mx-auto ml-14 text-[14px] content-center text-center px-8 font font-normal rounded-md  uppercase py-3 bg-[#080710] border-2 border-[#52C1B9] text-white ">SEE MORE

                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutSlider;