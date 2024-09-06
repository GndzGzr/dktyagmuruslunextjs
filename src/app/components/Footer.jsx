import {infos, links} from "../../../public/text/info"
import logoPhone from "../../../public/images/call_FILL0_wght400_GRAD0_opsz24.png"
import logoLocation from "../../../public/images/location_on_FILL0_wght400_GRAD0_opsz24 (1).png"
import instagram from "../../../public/images/instagram (1).png"
import youtube from "../../../public/images/youtube.png"
import linkedin from "../../../public/images/linkedin.png"
import tiktok from "../../../public/images/tiktok (1).png"
import Image from "next/image"
import Link from "next/link"
const footer = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-5 py-12 bg-[#1C252E]">
            <div className='grid px-4 lg:px-0 col-span-1 lg:col-start-2 gap-4'>
                <h1 className='flex items-center justify-center text-bold text-3xl'>İletişim</h1>
                <div className='flex items-center justify-start'>
                    <Image className='mr-4' width={32} src={logoPhone}></Image>
                    <h3 className='footerP'>{infos.telNumber}</h3>
                </div>
                <div className='flex items-center justify-start'>
                    <Image className='mr-4' width={32} src={logoLocation}></Image>
                    <h3 className='footerP'>{infos.location}</h3>
                </div>
                <div className='flex items-center justify-start'>
                    <Image className='mr-4' width={32} src={logoPhone}></Image>
                    <h3 className='footerP'>{infos.mail}</h3>
                </div>
            </div>
            
            <div className='grid px-4 lg:px-0 pt-4 lg:pt-0 col-span-1 lg:col-start-4 h-32'>
                <h1 className='text-center text-bold text-3xl'>Sosyal Medya</h1>
                <div className='flex items-center justify-center'>
                        <Link className="mr-4" href={links.instagramURL}><Image src={instagram}></Image></Link>
                        <Link className="mr-4" href={links.youtubeURL}><Image src={youtube}></Image></Link>
                        <Link className="mr-4" href={links.linkedinURL}><Image src={linkedin}></Image></Link>
                        <Link href={links.tiktokURL}><Image src={tiktok}></Image></Link>
                </div>
            </div>
            
        </div>
    )
}

export default footer