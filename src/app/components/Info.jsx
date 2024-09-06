import { links, infos, logos } from '../../../public/text/info'
import locationLogo from '../../../public/images/location_on_FILL0_wght400_GRAD0_opsz24 (1).png'
import callLogo from '../../../public/images/call_FILL0_wght400_GRAD0_opsz24.png'
import instagram from '../../../public/images/instagram (1).png'
import linkedin from '../../../public/images/linkedin.png'
import youtube from '../../../public/images/youtube.png'
import tiktok from '../../../public/images/tiktok (1).png'
import Image from 'next/image'
import Link from 'next/link'

const info = () => {
    return (

        <div className="grid grid-cols-1 grid-cols-4 px-24 py-3 bg-#1C252E">

            <div className="grid grid-cols-2 col-span-2 col-start-1 gap-4">
                <div className='flex items-center'>
                    <Image className="" height={32} src={callLogo}></Image>
                    <p className="ml-4 font-bold">{infos.telNumber}</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image className="" height={32} src={locationLogo}></Image>
                    <p className="ml-4 font-bold">{infos.location}</p>
                </div>
            </div>
            <div className="grid grid-cols-8 col-start-4">
                <div className='grid grid-cols-4 col-start-4 gap-4 col-span-5'>
                    <Link href={links.instagramURL} target="_blank"><Image src={instagram} height={32} className="pt-1"></Image></Link>
                    <Link href={links.linkedinURL} target="_blank"><Image src={linkedin} height={32}  className="pt-1"></Image></Link>
                    <Link className='justify-end' href={links.tiktokURL} target="_blank"><Image src={tiktok} height={32} className="pt-1"></Image></Link>
                    <Link href={links.youtubeURL} target="_blank"><Image src={youtube} height={48}  className="pt-1"></Image></Link>
                    
                </div>
            </div>

        </div>

    );
}

export default info;