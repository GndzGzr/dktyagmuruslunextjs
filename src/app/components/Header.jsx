import { links, infos, logos } from '../../../public/text/info'
import Image from 'next/image'
import Link from 'next/link'
import websiteLogo from '../../../public/images/WEB LOGO 2.png'
const header = () => {
    return (

        <div className="bg-white">
            <div className='grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-24 py-7'>
                <div className='grid grid-cols-1 lg:col-span-1 lg:col-start-1'>
                    <Link href="/"><Image className='ml-32' height={75} src={websiteLogo}></Image></Link>
                </div>
                <div className='grid lg:grid-cols-8 lg:col-span-2 lg:col-start-2 py-8 lg:py-0'>
                    <div className='grid grid-cols-3 lg:grid-cols-3 lg:col-span-4 lg:col-start-5'>
                        <Link className='flex items-center justify-center text-black text-xl font-medium' href="/pages/about">Hakkında</Link>
                        <Link className='flex items-center justify-center text-black text-xl font-medium' href="/pages/contact">İletişim</Link>
                        <div className='flex items-center justify-center text-xl'>
                            <Link href="/" className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>Ana Sayfa</Link>
                        </div>

                    </div>

                </div>

            </div>



        </div>

    );
}

export default header;