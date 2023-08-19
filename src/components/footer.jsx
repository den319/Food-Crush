
import {BiLogoGmail, BiLogoFacebook} from 'react-icons/bi/';
import {AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai';

function Footer() {

    const year= new Date().getFullYear();

    return (
        <footer className='min-w-[10rem]'>
            <div className="flex flex-row justify-center text-center mt-[5rem]">
                <div className='flex flex-col justify-center text-center mr-[10rem] max-[580px]:mr-1'>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-5xl font-semibold font-dancing-script">Food Crush</h1>
                        <h3 className='font-sans mt-5 text-lg text-white'>Thank you for visiting us</h3>
                    </div>

                    <div className="flex flex-row justify-center m-5">
                        <a href="#" className="m-2 text-3xl text-white hover:text-red-700">
                            <BiLogoGmail/>
                        </a>
                        <a href="#" className="m-2 text-3xl text-white hover:text-sky-500">
                            <AiOutlineTwitter/>
                        </a>
                        <a href="#" className="my-2 text-3xl text-white hover:text-blue-700">
                            <BiLogoFacebook/>
                        </a>
                        <a href="#" className="m-2 text-3xl text-white hover:text-pink-600">
                            <AiOutlineInstagram/>
                        </a>
                        <a href="#" className="m-2 text-3xl text-white hover:text-[#ff0000]">
                            <AiFillYoutube/>
                        </a>
                    </div>
                </div>

                <div className='block max-[580px]:hidden'>
                    <h1 className='text-xl font-semibold text-white font-mono'>HELPFUL LINKS</h1>

                    <ul className='mt-3'>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Subscription FAQs</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Masthead</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Accessibility Kelp</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Advertising</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Press Center</a>
                        </li>
                        <li>
                            <a href="#" className='text-white hover:underline hover:text-black'>Newsletters</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-sm text-center text-white mt-8 pb-5">
                &copy; 2022-{year} by Aquarium Blue, Inc.
            </div>
        </footer>
        
    )
}

export default Footer;