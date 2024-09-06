import imgAbout from '../../../public/images/Image 3@2x.jpg'
import "../../../public/css/about.css"
import Image from 'next/image';
const AboutContent = () => {
    return (
<div>
        <div className='hidden lg:block'>
            <div className="introAbout">
                <div className="imgAboutContainer">
                    <Image className='imgAbout'  src={imgAbout}></Image>
                </div>
                <div className="textAbout">
                    <h1 className='font-bold text-black text-4xl'>YAĞMUR USLU</h1>
                    <h1 className='font-semibold text-black text-4xl pt-4'>DİL VE KONUŞMA TERAPİSTİ</h1>
                    <p className='text-black font-regular pt-4 text-justify'>Bitlis doğumlu olan Yağmur Uslu, ilk ve orta öğretimini Bitlis’te tamamladıktan sonra Hacettepe Üniversitesi ‘‘Dil ve Konuşma Terapisi ’’ bölümünü başarı ile tamamlayarak “Dil ve Konuşma Terapisti” olmaya hak kazandı. Lisans eğitimi süresince mesleki alanda çeşitli kongrelere ve sempozyumlara katıldı. Ve de SERÇEV, Kızılay, TEMA gibi kuruluşlarda gönüllü ve aktif rol aldı.</p>
                    <br></br>
                    <p className='text-black font-regular pt-4 text-justify'>Profesyonel gelişimine verdiği önemden dolayı dil ve konuşma terapisi alanıyla ilgili güncel gelişmeleri sürekli olarak takip etmektedir. Mesleğine olan ilgi ve tutkusu, insanların iletişim boyutundaki problemlerini çözerek danışanının yaşam kalitesini desteklemek ve arttırmak üzerine odaklanmıştır. Samimi ve hoşgörülü tutumu, danışanlarının iletişim konusundaki psikolojik ve duygusal ihtiyaçlarını anlamasına yardımcı olmakla birlikte görüşmelerinde güven ve gizlilik ilkelerine büyük önem vermektedir.</p>
                </div>
            </div>
            <div className='textAbout-2'>
                <p className='text-black font-regular pt-4 text-justify'>Otizmli bireylerle daha etkili çalışmak amacıyla; Gilliam Otistik Bozukluk Derecelendirme Ölçeği-2 (GOBDÖ-2-TV) uygulayıcısıdır ve de ‘DIR Floortime 101 ’ eğitimini almıştır. Özellikle Gelişimsel Dil (Gecikmiş konuşma) alanında uyguladığı terapi tekniklerini başarıya ulaşmış olup bunlara ek bir terapi yöntemi olarak; etkileşim temelli yaklaşıma dayalı bir program olan ETEÇOM eğitimini almıştır. Erken çocukluk döneminde ve okul çağı dönemindeki dil ve konuşma bozukluğuna sahip çocuklar tespiti için TEDİL ve TODİL testlerinin uygulayıcısıdır.</p>
                <br></br>
                <p className='text-black font-regular pt-4 text-justify'>Lisans eğitimi boyunca Ankara’nın birçok farklı rehabilitasyon merkezinde ve kliniklerinde alanında uzman psikolog, ergoterapist, dil ve konuşma terapistinin yanında gerek gözlem gerekse uygulamalı staj yapmıştır.</p>
                <br></br>
                <p className='text-black font-regular pt-4 text-justify'> Çocukluğundan itibaren müziğe olan ilgisi hiç azalmamıştır. Şan eğitimi almakta ve keman çalmaktadır. Çeşitli sportif aktivitelere ilgi duyup tenis oynamaktadır.</p>
                <br></br>
                <p className='text-black font-regular pt-4 text-justify pb-8'>Şimdi Bursa Nilüfer'de ikamet eden Yağmur Uslu; konuşma, ses, yutma, bozuklukları alanlarında her yaşta bireylerle hem yüz yüze hem de online şekilde çalışmalarını sürdürmektedir. Amacı, danışanlarının iletişim problemlerine çözümler üreterek gerekli yönlendirmeleri yaparak onların daha mutlu bir yaşam sürmelerine destek olmaktır. Birlikte çalışılan süre boyunca, iletişiminiz için güvenli bir ortam yaratmak önceliğiyle sizlere tarafsız, anlayışlı ve empatiyle yaklaşmakta ve daha sağlıklı bir iletişim için terapi hizmeti vermektedir.</p>
                <div className='cvContainer'>
                    <div className="experience">
                        <h1 className='cvH font-bold'>İş Deneyimi</h1>
                    </div>
                    <div className='exp-list font-semibold pt-4'>
                        <ul className='list-disc'>
                            <h1 style={{ fontSize: '2vw' }}>STAJER DİL VE KONUŞMA TERAPİSTİ</h1>
                            <li className='font-medium'>
                                Yaman Şirinler Özel Eğitim ve Rehabilitasyon Merkezi İncirli Şubesi<br></br>
                                ANKARA <br></br>
                                Ocak 2022- Şubat 2022
                            </li>
                            <li className='font-medium'> Ayşe Şan Özel Eğitim ve Rehabilitasyon Merkezi- <br></br>
                                ANKARA <br></br>
                                Temmuz 2022- Ağustos 2022 </li>
                            <li className='font-medium'>Mavi Yıldızlar Özel Eğitim ve Konuşma Merkezi <br></br>
                                ANKARA <br></br>
                                Ekim 2022- Ocak 2023 </li>
                            <li className='font-medium'>ANKADİL Dil Konuşma ve Danışmanlık Merkezi- <br></br>
                                ANKARA <br></br>
                                Mart 2023- Haziran 2023 </li>
                            <li className='font-medium'>PERA Ankara Özel Eğitim Kurumu - <br></br>
                                ANKARA <br></br>
                                Nisan 2023- Mayıs 2023</li>
                            <h1 style={{ fontSize: '2vw' }}>DİL VE KONUŞMA TERAPİSTİ</h1>
                            <li className='font-medium'>
                                Özel Artı Özel Eğitim ve Rehabilitasyon Merkezi <br></br>
                                İnegöl/Bursa   <br></br>
                                Ağustos 2023- Nisan 2024
                            </li>
                            <li className='font-medium'>
                                Logos Özel Eğitim ve Rehabilitasyon Merkezi   <br></br>
                                Nilüfer/BURSA  <br></br>
                                Mayıs 2024- Haziran 2024
                            </li>
                            <li className='font-medium'>
                                Yağmur Uslu Dil ve Konuşma Merkezi  <br></br>
                                Nilüfer/BURSA  <br></br>
                                Haziran 2024- aktif olarak çalışmaya devam etmektedir
                            </li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: "#6B56CE" }} className="experience">
                        <h1 className='cvH font-bold'>Akademi</h1>
                    </div>
                    <div className='exp-list font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium'>
                                HACETTEPE ÜNİVERSİTESİ SAĞLIK BİLİMLERİ FAKÜLTESİ <br></br>
                                DİL VE KONUŞMA TERAPİSİ BÖLÜMÜ <br></br>
                                2019 - 2023 <br></br>
                            </li>


                        </ul>
                    </div>
                    <div style={{ backgroundColor: "#AD71EE" }} className="experience">
                        <h1 className='cvH font-bold'>Eğitimler - Seminerler</h1>
                    </div>
                    <div className='exp-list font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium'>
                                Dil ve Konuşma Terapisti Zehra Gökduman ile 'Sesimize Kulak Ver'' Eğitimi <br></br>
                                03/03/2022
                            </li>
                            <li className='font-medium'>
                                Ankara Dil ve Konuşma Terapisi Zirvesi <br></br>
                                17/12/2022
                            </li>
                            <li className='font-medium'>
                                2. Ulusal Akıcılık Bozuklukları Günü, Kekemelik Farkındalık Günü Sempozyumu <br></br>
                                23/10/2022
                            </li>
                            <li className='font-medium'>
                                1. Uluslararası Katılımlı Serebral Palsi Sempozyumu <br></br>
                                06/10/2022
                            </li>
                            <li className='font-medium'>
                                D.I.R. FLOORTİME 101 Başlangıç Düzeyi <br></br>
                                14-15/02/2022
                            </li>

                        </ul>
                    </div>
                    <div style={{ backgroundColor: "#FFBFE5" }} className="experience">
                        <h1 className='cvH font-bold'>Sertifikalar</h1>
                    </div>
                    <div className='exp-list font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium'>
                                GOBDÖ-2-TV ( Gilliam Otistik Bozukluk Derecelendirme Ölçeği <br></br>
                                22/05/2022

                            </li>
                            <li className='font-medium'>
                                ETEÇOM-2 (Etkileşim Temelli Erken Çocuklukta Müdahale Programı) <br></br>
                                22/05/2022
                            </li>
                            <li className='font-medium'>
                                TEDİL (Türkçe Erken Dil Gelişim Testi) <br></br>
                                15/06/2022
                            </li>
                            <li className='font-medium'>
                                1. Uluslararası Katılımlı Serebral Palsi Sempozyumu <br></br>
                                06/10/2022
                            </li>
                            <li className='font-medium'>
                                TODİL (Türkçe Okul Çağı Dil Gelişimi Testi) <br></br>
                                15/06/2022
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div className='block lg:hidden'>
            <div className="grid grid-cols-1 bg-[#F9F6EF]">
                <div className="">
                    <Image  src={imgAbout}></Image>
                </div>
                <div className="px-4">
                    <h1 className='font-bold text-black text-4xl pt-4'>YAĞMUR USLU</h1>
                    <h1 className='font-semibold text-black text-4xl pt-4'>DİL VE KONUŞMA TERAPİSTİ</h1>
                    <h3 className='text-black font-regular pt-4 text-justify'>Bitlis doğumlu olan Yağmur Uslu, ilk ve orta öğretimini Bitlis’te tamamladıktan sonra Hacettepe Üniversitesi ‘‘Dil ve Konuşma Terapisi ’’ bölümünü başarı ile tamamlayarak “Dil ve Konuşma Terapisti” olmaya hak kazandı. Lisans eğitimi süresince mesleki alanda çeşitli kongrelere ve sempozyumlara katıldı. Ve de SERÇEV, Kızılay, TEMA gibi kuruluşlarda gönüllü ve aktif rol aldı.</h3>
                    <br></br>
                    <h3 className='text-black font-regular pt-4 text-justify'>Profesyonel gelişimine verdiği önemden dolayı dil ve konuşma terapisi alanıyla ilgili güncel gelişmeleri sürekli olarak takip etmektedir. Mesleğine olan ilgi ve tutkusu, insanların iletişim boyutundaki problemlerini çözerek danışanının yaşam kalitesini desteklemek ve arttırmak üzerine odaklanmıştır. Samimi ve hoşgörülü tutumu, danışanlarının iletişim konusundaki psikolojik ve duygusal ihtiyaçlarını anlamasına yardımcı olmakla birlikte görüşmelerinde güven ve gizlilik ilkelerine büyük önem vermektedir.</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 bg-[#F9F6EF] px-4'>
                <h3 className='text-black font-regular pt-4 text-justify'>Otizmli bireylerle daha etkili çalışmak amacıyla; Gilliam Otistik Bozukluk Derecelendirme Ölçeği-2 (GOBDÖ-2-TV) uygulayıcısıdır ve de ‘DIR Floortime 101 ’ eğitimini almıştır. Özellikle Gelişimsel Dil (Gecikmiş konuşma) alanında uyguladığı terapi tekniklerini başarıya ulaşmış olup bunlara ek bir terapi yöntemi olarak; etkileşim temelli yaklaşıma dayalı bir program olan ETEÇOM eğitimini almıştır. Erken çocukluk döneminde ve okul çağı dönemindeki dil ve konuşma bozukluğuna sahip çocuklar tespiti için TEDİL ve TODİL testlerinin uygulayıcısıdır.</h3>
                <br></br>
                <h3 className='text-black font-regular pt-4 text-justify'>Lisans eğitimi boyunca Ankara’nın birçok farklı rehabilitasyon merkezinde ve kliniklerinde alanında uzman psikolog, ergoterapist, dil ve konuşma terapistinin yanında gerek gözlem gerekse uygulamalı staj yapmıştır.</h3>
                <br></br>
                <h3 className='text-black font-regular pt-4 text-justify'> Çocukluğundan itibaren müziğe olan ilgisi hiç azalmamıştır. Şan eğitimi almakta ve keman çalmaktadır. Çeşitli sportif aktivitelere ilgi duyup tenis oynamaktadır.</h3>
                <br></br>
                <h3 className='text-black font-regular pt-4 text-justify pb-8'>Şimdi Bursa Nilüfer'de ikamet eden Yağmur Uslu; konuşma, ses, yutma, bozuklukları alanlarında her yaşta bireylerle hem yüz yüze hem de online şekilde çalışmalarını sürdürmektedir. Amacı, danışanlarının iletişim problemlerine çözümler üreterek gerekli yönlendirmeleri yaparak onların daha mutlu bir yaşam sürmelerine destek olmaktır. Birlikte çalışılan süre boyunca, iletişiminiz için güvenli bir ortam yaratmak önceliğiyle sizlere tarafsız, anlayışlı ve empatiyle yaklaşmakta ve daha sağlıklı bir iletişim için terapi hizmeti vermektedir.</h3>
                <div className='cvContainer'>
                    <div className="bg-[#3B4EA8] border rounded-lg">
                        <h1 className='font-bold text-2xl p-2'>İş Deneyimi</h1>
                    </div>
                    <div className='font-semibold pt-4'>
                        <ul className='list-disc'>
                            <h1 className='text-xl mb-4'>STAJER DİL VE KONUŞMA TERAPİSTİ</h1>
                            <li className='font-medium text-lg'>
                                Yaman Şirinler Özel Eğitim ve Rehabilitasyon Merkezi İncirli Şubesi<br></br>
                                ANKARA <br></br>
                                Ocak 2022- Şubat 2022
                            </li>
                            <li className='font-medium text-lg'> Ayşe Şan Özel Eğitim ve Rehabilitasyon Merkezi- <br></br>
                                ANKARA <br></br>
                                Temmuz 2022- Ağustos 2022 </li>
                            <li className='font-medium text-lg'>Mavi Yıldızlar Özel Eğitim ve Konuşma Merkezi <br></br>
                                ANKARA <br></br>
                                Ekim 2022- Ocak 2023 </li>
                            <li className='font-medium text-lg'>ANKADİL Dil Konuşma ve Danışmanlık Merkezi- <br></br>
                                ANKARA <br></br>
                                Mart 2023- Haziran 2023 </li>
                            <li className='font-medium text-lg'>PERA Ankara Özel Eğitim Kurumu - <br></br>
                                ANKARA <br></br>
                                Nisan 2023- Mayıs 2023</li>
                            <h1 className='text-xl my-4'>DİL VE KONUŞMA TERAPİSTİ</h1>
                            <li className='font-medium text-lg'>
                                Özel Artı Özel Eğitim ve Rehabilitasyon Merkezi <br></br>
                                İnegöl/Bursa   <br></br>
                                Ağustos 2023- Nisan 2024
                            </li>
                            <li className='font-medium text-lg'>
                                Logos Özel Eğitim ve Rehabilitasyon Merkezi   <br></br>
                                Nilüfer/BURSA  <br></br>
                                Mayıs 2024- Haziran 2024
                            </li>
                            <li className='font-medium text-lg'>
                                Yağmur Uslu Dil ve Konuşma Merkezi  <br></br>
                                Nilüfer/BURSA  <br></br>
                                Haziran 2024- aktif olarak çalışmaya devam etmektedir
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#6B56CE] border rounded-lg mt-4">
                        <h1 className='font-bold text-2xl p-2'>Akademi</h1>
                    </div>
                    <div className='font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium text-lg'>
                                HACETTEPE ÜNİVERSİTESİ SAĞLIK BİLİMLERİ FAKÜLTESİ <br></br>
                                DİL VE KONUŞMA TERAPİSİ BÖLÜMÜ <br></br>
                                2019 - 2023 <br></br>
                            </li>


                        </ul>
                    </div>
                    <div className="bg-[#AD71EE] border rounded-lg mt-4">
                        <h1 className='font-bold text-xl p-2'>Eğitimler - Seminerler</h1>
                    </div>
                    <div className='font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium text-lg'>
                                Dil ve Konuşma Terapisti Zehra Gökduman ile 'Sesimize Kulak Ver'' Eğitimi <br></br>
                                03/03/2022
                            </li>
                            <li className='font-medium text-lg'>
                                Ankara Dil ve Konuşma Terapisi Zirvesi <br></br>
                                17/12/2022
                            </li>
                            <li className='font-medium text-lg'>
                                2. Ulusal Akıcılık Bozuklukları Günü, Kekemelik Farkındalık Günü Sempozyumu <br></br>
                                23/10/2022
                            </li>
                            <li className='font-medium text-lg'>
                                1. Uluslararası Katılımlı Serebral Palsi Sempozyumu <br></br>
                                06/10/2022
                            </li>
                            <li className='font-medium text-lg'>
                                D.I.R. FLOORTİME 101 Başlangıç Düzeyi <br></br>
                                14-15/02/2022
                            </li>

                        </ul>
                    </div>
                    <div className="bg-[#FFBFE5] border rounded-lg mt-4">
                        <h1 className='font-bold text-xl p-2'>Sertifikalar</h1>
                    </div>
                    <div className='font-semibold pt-4'>
                        <ul className='list-disc'>
                            <li className='font-medium text-lg'>
                                GOBDÖ-2-TV ( Gilliam Otistik Bozukluk Derecelendirme Ölçeği <br></br>
                                22/05/2022

                            </li>
                            <li className='font-medium text-lg'>
                                ETEÇOM-2 (Etkileşim Temelli Erken Çocuklukta Müdahale Programı) <br></br>
                                22/05/2022
                            </li>
                            <li className='font-medium text-lg'>
                                TEDİL (Türkçe Erken Dil Gelişim Testi) <br></br>
                                15/06/2022
                            </li>
                            <li className='font-medium text-lg'>
                                1. Uluslararası Katılımlı Serebral Palsi Sempozyumu <br></br>
                                06/10/2022
                            </li>
                            <li className='font-medium text-lg'>
                                TODİL (Türkçe Okul Çağı Dil Gelişimi Testi) <br></br>
                                15/06/2022
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
</div>
    );
}

export default AboutContent;