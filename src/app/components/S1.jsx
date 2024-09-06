
import Image from "next/image";

const s1 = () => {
    return (
        <div className="bg-[#FFD0EC] px-64 py-12">
            <div className="text-center pb-8">
                <h1 className="text-[#FFB6E1] text-4xl pb-8">Seanslar</h1>
                <h1 className="text-[#1C252E] text-5xl font-bold">Konuşma Bozukluklarına Profesyonel Yaklaşılan Her Seans Yeni Bir Keşiftir</h1>

            </div>
            <div className="grid grid-cols-8 pt-12">

                <div className="grid col-span-3 bg-seans-first h-screen bg-contain bg-no-repeat bg-center rounded-lg">
                    <div className="px-8" >

                        <h1 className="text-4xl py-12 font-bold text-center">Konuşma Sesi Bozukluğu</h1>
                        <ul className="pt-40 text-black text-xl font-medium list-disc px-8 ">
                            <li className="pb-2">Süre: haftada 1 gün</li>
                            <li className="pb-2">Seans Süresi: 40 dakika    </li>
                            <li className="">Amaç: <br></br>Bireyin konuşma seslerini hayatına entegre etmek</li>
                        </ul>
                        <button style={{ borderColor: "white" }} className="seansButton">Daha Fazla</button>


                    </div>

                </div>
                <div className="grid col-span-5 px-16">
                    <div>
                        <h1 className="text-[#1C252E] font-bold text-3xl p-4 h-16">Sizden Gelenler</h1>
                        <div className="carousel carousel-vertical rounded-box h-96">

                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">H...
                                            </h3>
                                            <time class="text-sm" datetime="2022-11-13T20:00Z">25 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Yağmur hocamla yolumuz tesadüfen kesişti öncelikle, kendisini tanıdığım için çok mutluyum. Yoluma ışık olup aydınlattı. Konuşmalarımda takılmalarım olduğu için başvurdum. 7. seansımızı tamamladık, büyük yol kat ettik. Beni tanıyan herkes "sende büyük değişiklik var" diyorlar. İyi ki sizi tanıdım hocam, iyi ki varsınız. Varlığınız daim olsun, sizi seviyorum.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">H...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">23 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Uygulama üzerinden kendisine ulaştım. 18 yaşında oğlumda konuşma bozukluğu vardı. Kendisiyle daha ilk randevumuzda pozitif enerji verdi. Çok ilgili bir uzman, oğlumla iletişim çok güzel ve biz baya bir yol kat ettik. Ayrıca bizimle iletişimi de çok başarılı. Herkese tavsiye edebilirim.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">H...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">22 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Yağmur Hanım'dan çok memnun kaldım. 12 yaşındaki kızımın hızlı bozuk konuşması için 8 seans terapi aldık. Bilgi almak için ilk aradığımda güvenebileceğimi hissetmiştim. Yağmur Hanıma internetten araştırarak ulaştım. Online terapi olmasına rağmen, çok güzel mesafe katettik. Seanslarımız bitti ama Yağmur Hanım hala takibe devam ediyor. Kesinlikle tavsiye ederim.

                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">S...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">20 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Uygulama üzerinden ulaştım, tamamen tesadüf oldu. Benim hızlı konuşma ve doğru nefes alma sorunu için başvurdum. Hem Arapça hem de Türkçe çalışıyoruz. Henüz 5. haftamızdayız, gayet güzel ilerliyoruz. Yağmur Hanım gerçekten işinde çok başarılı, çevreme rahatlıkla tavsiye ederim.</p>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">Z...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">19 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Uygulama üzerinden Yağmur Hanımla irtibat haline geçtik. Hızlı konuşma bozukluğu yaşıyordum. 3 seansımız geride kaldı. Kendisinden çok memnunum, çok güler yüzlü ve işinde ehli olduğu çok belli. Seanslarımız da keyifli ve bilgili geçiyor. Ben çok memnunum, çok yol gösterici, tavsiye ederim.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">M....k

                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">1 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">Hızlı konuşma sorunu için başvurdum. 4 seans oldu gideli. Daha iyiye gidiyorum, takılmalarım azaldı. Eskiye göre konuşmalarım yavaşladı. Şans eseri buldum kendisini. Yağmur Hanım işinde iyi ve çok ilgili. Hatta söylediği şeyleri yapmayınca çok kızıyor. Ben memnunum.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">G....e


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">29 Haziran 2024</time>
                                        </div>
                                        <p class="text-base">Kızımın hızlı konuşma bozukluğu için başvurduk. Farklı bir uygulamadan buldum kendisini. Online üzerinden katılıyoruz seanslara. Çok güzel ilerleme katettik. 4 seans oldu. Devam ediyoruz. Devam etme sebebimiz Yağmur Hanım'dan kaynaklı değil, kızım üstünde durmuyor. Biz talep ettik, yoksa süreç bitiyordu. Seansları uzmanımız yeterli gördü. Ama faaliyete geçirmiyor kızım. Yağmur Hanım çok tatlı ve işinin ehli bir insan. Çok memnunuz. Bize her türlü konuda yardımcı oluyor.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">F....ş


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">22 Mart 2024</time>
                                        </div>
                                        <p class="text-base">Kızım Yağmur Hocanın derslerine girdi.Hala devam ediyoruz .Kızım çok memnun kendisinden hem eğlendirip hem öğretiyor.Kızım severek kendisine gidiyor.Dikkatli olması hemen fark edip bilgilendiriyor.Biz kendisinden çok memnunuz..Hemen aksi bir durum olduğunda fark edip bilgi vermesi çok önemli.Derslerde yeterlilik ve çabası öğrencisi ile iletişimi çok güzel.Her şeyden önce öğrencisi ile ilgili.Ev için verdiği ödevleri de çok dikkatli bir şekilde takip ediyor</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">S....


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">27 Haziran 2024</time>
                                        </div>
                                        <p class="text-base">Çocuğum R harfini çıkaramadığı için başvurdum. Çocuklarla iletişimini beğeniyorum ve çocuğum yabancılık çekmedi. 2-3 seans gittik. Seans esnasında R harfini çıkarmadı. Orada gördüğü tekniklerle kendisi uygulayarak çıkarmaya başladı. Farkındalık oluştu çocuğumda. Yağmur Hanımla birlikteyken kendisini kapattı ve yapmak istemedi. Yağmur Hanım yeni mezun enerji dolu bir uzman. Terapi sonrasında da ilgileniyor. Kendi alanında gelişime açık hem de okulda öğrendiği bilgileri aktarmakta keyif alan ve gayret eden birisi.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">İ....


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">10 Mart 2024</time>
                                        </div>
                                        <p class="text-base">Gittiğimiz kurumda dil terapistimiz kendisi. 9 yaşındaki kızımın dil sorunu vardi. O sebeple yollarımız kesişti. Kısa sürede büyük bir ilerleme sağladık. Kesinlikle tavsiye ederim, ediyorum da.

                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">Ö....


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">1 Mart 2024</time>
                                        </div>
                                        <p class="text-base">Biz bir kurumda belli bir süredır dil eğitimi almaktayız. Yağmur Hoca'mızla yaklasık 4 aydır derse giriyoruz kendisinden çok memnunuz bazı haflerı hıc çıkaramazken ve harflerın yerlerını degiştirirken şimdi anlasılır ve akıcı şekılde konuşup,okuyabılıyoruz. Akademik olarakta epey ilerledik. İyi ki tanıştık çok ilgili ve kibar hocamızla.

                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">S....


                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">28 Şubat 2024</time>
                                        </div>
                                        <p class="text-sm">Kızım için konuşma bozukluğu tanısı konulduktan sonra bir kurumda dil terapist dersleri almaya başladık. Kurum değiştirmek isteyince, kurum müdürü, Yağmur hocanın iyi bir hoca ve sizin istediğiniz seviyeye gelecek vaatleriyle bir tur daha devam etmeye karar vermiştik ve iyi ki diyorum. Sonunda Yağmur hocaya denk geldik ve sistemle ve ilgiyle ilerledik. İşin içine beni de kattı hocamız ve şuan derslerimiz devam ediyor, çok iyi ilerliyoruz. Başkaları tarafında da fark edilebilir bir ilerleme oldu. Yağmur hocaya ilk önce denk gelseydik diyorum her zaman. İnşallah evlatlarınızda konuşma bozukluğu olmaz ama eğer olursa da çözümü önce Allah'tan sonra Yağmur hocada diyorum.

                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">Me...u



                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">27 Şubat 2024</time>
                                        </div>
                                        <p class="text-sm">Yağmur Hanım işinde profesyonel bir terapist. Hızlı konuşma bozukluğum ve kekemelik sorunum nedeniyle kendisine başvurdum. Sürecin en başında yaptığı değerlendirmeyle koyduğu tanı, ardından tedavinin neleri içerdiği ile ilgili bilgilendirmesi ve ne kadarlık bir sürede beni tamamen iyileştirip, konuşmamın akıcı ve anlaşılır bir hale geleceği konusunda verdiği tarih tam olarak örtüştü. Ayrıca terapi saatleri haricinde WhatsApp üzerinden verdiği ekstra desteğiyle de birlikte çalışmaktan büyük mutluluk duydum. Bana istediğim sonucu aldırdı. Kendisinden çok memnun kaldım.



                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">N...



                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">27 Şubat 2024</time>
                                        </div>
                                        <p class="text-base">Hocamız ile özel eğitim ve rehabilitasyon merkezi sayesinde tanıştık. Çocuklarım konuşma sıkıntısı vardı hem de ileri derecede. Yaklaşık 6 aydır Yağmur hocayla beraber bu süreci geçiriyoruz ve iyi ki onunla tanışmışız, iyi ki karşımıza çıkmış. Gerek çocuklarımla gerekse benimle çok güzel ilgilendi. Bizi her daim motive ederek bu süreci çok güzel anlattık. Çocukların su anki gelişimi çok güzel, konuşmalarındaki sıkıntı baya Yağmur hoca vesilesiyle düzeldi . Çevremdeki insanlara da gözüm kapalı tavsiye ederim.



                                        </p>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>




                </div>

            </div>
        </div>
    );
}

export default s1