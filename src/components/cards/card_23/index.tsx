import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Card23() {
    return (
        // card
        <div className="w-42rem flex flex-row bg-white font-muli shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="w-full basis-2/5 relative">
                {/* img | dang thac mac cho nay: h-full; khong co h-full; aspect-auto; aspect-ratio: 9/16 */}
                <img className="absolute inset-0 w-full h-full object-cover" src={images.secondsImg23} alt="" />
            </div>
    
            {/* right */}
            <div className="flex flex-col basis-3/5 space-y-10">
                {/* top */}
                <div className="space-y-5 mt-6 ps-5 pe-10">
                    {/* name - roots */}
                    <div className="font-playfair space-y-1">
                        <p className="text-3xl font-bold">Rustis Reds</p>
                        <p className="text-base text-yellow-700 uppercase">From the land of Italy</p>
                    </div>
    
                    {/* description */}
                    <div>
                        <p className="text-base text-gray-600">
                            Totam at eius excepturi deleniti sed, error repellat itaque omnis maiores tempora ratione dolor velit minus porro aspernatur repudiandae.
                        </p>
                    </div>
    
                    {/* rate */}
                    <div className="flex flex-row -ml-1 space-x-1">
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} color="#CF914C" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} color="#CF914C" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} color="#CF914C" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarRegular} color="#CF914C" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarRegular} color="#CF914C" />
                        </button>
                    </div>
                </div>
    
                {/* bottom */}
                <div className="flex flex-row justify-between items-center bg-neutral-200 px-5 py-6 top-shadow-card-23">
                    {/* arrow - left */}
                    <div className="w-8 h-8 p-1 flex justify-center items-center border-2 border-neutral-400 rounded-full z-10 hover:-translate-x-1 transition-transform">
                        <button>
                            <FontAwesomeIcon icon={faAngleLeft} color="#A3A3A3" />
                        </button>
                    </div>
    
                    {/* img course */}
                    <div className="w-2/12 flex justify-center space-x-5 ">
                        <img className="hover:cursor-pointer aspect-square border-4 border-white rounded-full" src={images.firtsImg23} alt="" />
                        <img className="hover:cursor-pointer aspect-square border-4 border-amber-950/70 rounded-full" src={images.secondsImg23} alt="" />
                        <img className="hover:cursor-pointer aspect-square border-4 border-white rounded-full" src={images.thirdImg23} alt="" />
                    </div>

                    {/* arrow - right */}
                    <div className="w-8 h-8 p-1 flex justify-center items-center border-2 border-neutral-400 rounded-full hover:translate-x-1 transition-transform">
                        <button>
                            <FontAwesomeIcon icon={faAngleRight} color="#A3A3A3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card23
