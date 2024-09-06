import aboutImage from "../../../public/images/Mask Group 1@2x.png"
import Image from "next/image"
const about = () => {
    return (
        <div className="grid grid-col-8 px-4 lg:px-48 py-16 bg-[#F9F6EF] lg:gap-8">
            <div className="grid col-span-5 col-start-1">
                <h1 className="text-[#AD71EE] font-medium text-3xl border-s-4 border-[#AD71EE] mb-4 lg:mb-0 pl-2 h-12">Biz Kimiz?</h1>
                <h1 className="text-[#1C252E] font-bold text-4xl mb-4 lg:mb-0">Dil ve Konuşma Bozukluklarında Profesyonel Destek</h1>
                <p className="text-[#1C252E] font-medium text-lg text-justify mb-4 lg:mb-0">Yağmur Uslu, Bitlis doğumlu bir Dil ve Konuşma Terapisti'dir. Hacettepe Üniversitesi'nde eğitim alarak bu alanda uzmanlaşmıştır. Mesleki gelişimine önem vererek çeşitli kongreler ve sempozyumlara katılmış, gönüllü çalışmalarda bulunmuştur. Özellikle otizmli bireylerle etkili çalışabilmek için çeşitli eğitimler almış ve terapi tekniklerinde uzmanlaşmıştır. Ankara'da birçok rehabilitasyon merkezinde staj yapmıştır. Aynı zamanda müzikle de ilgilenmekte, şan eğitimi almakta ve keman çalmaktadır. Şu anda Bursa İnegöl'de yaşayan Yağmur Uslu, konuşma, ses, yutma bozuklukları gibi alanlarda her yaşta bireyle çalışarak iletişim problemlerine çözümler üretmekte ve terapi hizmeti vermektedir.</p>

            </div>
            <div className="hidden lg:block grid lg:col-span-3 lg:col-start-6">
                <Image className="" src={aboutImage}></Image>
            </div>
        </div>
       
    )
}

export default about