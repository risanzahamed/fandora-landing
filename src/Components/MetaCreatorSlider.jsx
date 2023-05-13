import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import invi1 from "../../src/assets/invisible.png"
import invi2 from "../../src/assets/inv.png"
import crypto1 from "../../src/assets/cryptoPunk.png"
import crypto2 from "../../src/assets/cryptoPunk3D.png"
import rabbit from "../../src/assets/Rabbit.png"
import whiteAb from "../../src/assets/whiteAb.png"
import logoCr from "../../src/assets/Logo_Crypto.png"


const MetaCreatorSlider = () => {
    return (
        <div>
            <h2 className=" text-[80px] font-bold text-center uppercase pt-48  text-transparent  bg-clip-text bg-gradient-to-r from-[#6143F3]  to-[#15E8BA]">MORE FROM THIS CREATOR</h2>

            <h2 className="text-center text-3xl text-[#38A1BB] mt-4">Metaverse  Avataars</h2>

            <div >
                <div className="flex items-center mx-auto justify-center  sm:py-8 ">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={4} step={1} infinite={true}>
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
                                                    <img src={invi1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={invi2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>


                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={rabbit} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
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
                                                    <img src={invi1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={invi2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={rabbit} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
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
                                                    <img src={invi1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={invi2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={crypto2} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                        <div className="block flex-shrink-0 bg-[#2A2A2A] p-4 rounded-lg w-full sm:w-auto">
                                                <div>
                                                    <img src={rabbit} alt="black chair and white table" className="object-cover object-center w-full" />
                                                </div>

                                                <div className='flex justify-between mt-6'>
                                                    <div>
                                                        <img src={whiteAb} alt="" srcSet="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-left font-semibold  text-xl text-white'>InvisibleFriend #54</h2>
                                                        <p className='text-white mt-4'>INVISIBLE_FRIEND.CO</p>
                                                    </div>

                                                    <div>
                                                        <img src={logoCr} alt="" srcSet="" />
                                                    </div>
                                                </div>

                                                <div className='flex justify-between mt-8'>
                                                    <div>
                                                        <h2 className='text-xl text-white'>Auction</h2>
                                                        <h2 className='text-[#52C1B9] text-[14px]'>3h : 28m: 56s</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>1.55 ETH</h2>
                                                        <h2 className='text-white text-[14px]'> floor price</h2>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl text-white'>$5623.1</h2>
                                                        <h2 className='text-[#24FF00] text-[14px]'>+8.9%</h2>
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


        </div>
    );
};

export default MetaCreatorSlider;
