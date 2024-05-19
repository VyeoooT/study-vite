import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card30() {
    return (
        // card
        <div className="w-96 bg-white flex flex-col space-y-3">
            {/* top */}
            <div className="relative">
                {/* featured */}
                <div className="w-24 py-1 pl-2 path-polygon-card-30 bg-orange-500 text-white absolute -translate-y-1/2">Featured</div>

                {/* hot - heart/arrow */}
                <div className="absolute w-full bottom-2">
                    <div className="flex flex-row justify-between items-center mx-5">
                        <div className="text-sm text-white py-1 px-2 bg-orange-500">Hot</div>

                        <div className="flex flex-row">
                            <img src={icons.iconHeart30} alt="" />
                            <img src={icons.iconSetting30} alt="" />
                        </div>
                    </div>
                </div>

                <img className="w-full aspect-video object-cover" src={images.house30} alt="" />
            </div>

            {/* bottom */}
            <div className="flex flex-col mx-5 space-y-5">
                {/* name - description */}
                <div className="space-y-2">
                    <p className="text-base font-bold">Home In Merrick Way</p>
                    <p className="text-sm text-neutral-500">Enchanting three bedrooms, three bath home with spacious one bedroom, one bath</p>
                </div>

                {/* rooms */}
                <div className="flex flex-row space-x-5">
                    {/* bedrooms */}
                    <div className="flex flex-col space-y-1">
                        <p className="text-base font-bold">Bedrooms</p>

                        <div className="flex flex-row items-center">
                            <img src={icons.iconBedrooms30} alt="" />
                            <p className="">3</p>
                        </div>
                    </div>

                    {/* bathrooms */}
                    <div className="flex flex-col space-y-1">
                        <p className="text-base font-bold">Bathrooms</p>
                        
                        <div className="flex flex-row items-center">
                            <img src={icons.iconBathrooms30} alt="" />
                            <p className="">3</p>
                        </div>
                    </div>

                    {/* area */}
                    <div className="flex flex-col space-y-1">
                        <p className="text-base font-bold">Area</p>
                        
                        <div className="flex flex-row items-center">
                            <img src={icons.iconArea30} alt="" />
                            <p className="">4300m2</p>
                        </div>
                    </div>
                </div>

                {/* price */}
                <div>
                    <p className="text-base font-bold">For Sale</p>
                    <p className="text-xl text-emerald-500 font-light">$540,000</p>
                </div>
            </div>
        </div>
    )
}

export default Card30
