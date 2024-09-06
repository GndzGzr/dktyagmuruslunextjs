
import Image from "next/image";

const s3 = () => {
    return (
        <div className="bg-[#FFD0EC] px-64 py-12">

            <div className="grid grid-cols-8 pt-12">

                <div className="grid col-span-3 bg-seans-third h-screen bg-contain bg-no-repeat bg-center rounded-lg">
                    <div className="px-8" >

                        <h1 className="text-4xl py-20 font-bold text-center">Kekemelik</h1>
                        <ul className="pt-40 text-black text-xl font-medium list-disc px-8 ">
                            <li className="pb-2">Süre: haftada 1 veya 2 gün</li>
                            <li className="pb-2">Seans Süresi: 40 dakika    </li>
                            <li className="">Amaç: <br></br>Bireyin spontan konuşmasındaki akıcısızlıklarını kontrol altına almasını sağlamak</li>
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
                                            <h3 class="font-bold text-lg">S...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">19 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Yağmur Hanımdan çok memnun kaldım. İlgisi çok iyiydi, seanslara hep zamanında başlıyorduk. Çevremdeki herkese de öneririm. Kekemelik rahatsızlığı ile başvurmuştum ve büyük bir azalma var şu anda. Konuşmam düzeldi. Yağmur Hanım ile karşılaştığıma mutluyum.</p>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">E...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">18 Ağustos 2024</time>
                                        </div>
                                        <p class="text-base">Oğlum 10 yaşında kekemelikten dolayı Yağmur Hanım ile terapilere başladık. İnternette araştırdım ve Yağmur Hanım ile oradan tanıştık. 7 seans terapi aldık şu ana kadar oğlumda bu hafta daha da fark ediyorum konuşmalarında kekemelik azaldı, yok denilebilecek kadar çok nadir tekrarlıyor. Daha özgüvenli oldu, Yağmur Hanım sayesinde derslerine daha adapte oldu, teşvikleri sayesinde her gün heyecanla derslerimizi yaptık. Herkese tavsiye ederiz.</p>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">O...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">8 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">Sosyal medya üzerinden ulaşım sağladım. 5 yaşında oğlumun kekemeliği başlamıştı ve harfleri doğru olarak söyleyemiyordu. Fakat Yağmur Hanım sayesinde kekemelik yüzde 1 düzeyine indi. Yöntemleri ve ilgisiyle çocuğuma konuşmayı sevdirdi. İlk seansımızda çekinerek gitse de şimdi kendi isteğiyle koşarak gidiyor. Tavsiye ederim.

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
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">7 Temmuz 2024</time>
                                        </div>
                                        <p class="text-sm">Yağmur Hanım ile çalışma programımızdan son derece memnunum. DoktorTakvimin'den, 13 yaşındaki oğlumun konuşma bozukluğu, kekeleme probleminden dolayı başvurdum ve süreçten çok memnunum. Sadece haftada bir seans yapmakla kalmıyor, her gün iletişime geçip, günlük rutinlerin yapılıp yapılmadığını, aile bireylerinin duygu ve durumlarının danışanı nasıl etkilediğini vs. bunları dahi inceliyor. Bence yaptığı işi son derece özenle yapıyor. Danışanı ile bir bağ kurduğuna düşünüyorum. Dört seansta bir başarı elde ettik, daha fazlasının olacağına da yürekten inanıyorum. Kesinlikle konuşma problemi çeken yetişkin, çocuk, ergen herkese tavsiye ederim.

                                        </p>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">M...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">7 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">Ben öğretmenim ve mülakata gireceğim, bu yüzden kendisine internetten ulaştım. Seanslara başladık ve şu an takılmalar olsa da eskisine göre çok daha rahat hissediyorum, çok samimi, iyi niyetli ve içten gerçekten yardımcı olmaya çalışıyor ve ilgileniyor. Tavsiye ederim.

                                        </p>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">E...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">5 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">İnternet üzerinden ulaştım, tamamen tesadüf oldu. Kızım konuşma güçlüğü yaşıyordu ve bazı harflerde takılıp kalıyordu. Henüz 4. haftamızdayız, gayet güzel ilerliyoruz. Yağmur Hanım gerçekten işinde çok başarılı, çevreme rahatlıkla tavsiye ederim.

                                        </p>


                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">M...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">3 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">5 haftadır online ortamda Yağmur Hanım ile çalışıyorum. Yağmur Hanım'ın cana yakın ve konuya hakim olduğu çok belirgin. İlk haftadan beri öğrendiğim teknikleri kullanarak kekemelik kontrolümü yönetmeye başladım.

                                        </p>


                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">Ni...r
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">29 Haziran 2024</time>
                                        </div>
                                        <p class="text-base">Yağmur hocamla 3-4 hafta önce gibi kısa bir sürede verim aldık 13 yaşındaki oğlum için çok ilerleme kaydettik önümüzdeki süreçte çok daha güzel olacağına inanıyorum Yağmur hocam iyi ki varsınız.

                                        </p>


                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">A....d

                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">28 Haziran 2024</time>
                                        </div>
                                        <p class="text-base">6 yaşındaki kızımın kekemelik sıkıntısı için danıştık. 4-5 seans aldı. Bayram sebebiyle ara verdik. Devam edeceğiz. Uzman çok başarılı biri. İşini severek yapıyor. Memnunuz. Seanslar sayesinde düzelmeye başladı. Evde de çalışmamız gerekiyor ama çalışamıyoruz. Yağmur Hanım çok sıcakkanlı ve çocuklarla arası iyi.
                                        </p>


                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">

                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">T....

                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">28 Şubat 2024</time>
                                        </div>
                                        <p class="text-base">Ben küçükken bir sahneye çıktım ve kekemeliğim orda başladı. Yağmur Hanım' bu sebeple başvurdum. Uzmanım çok iyi bir öğretmen ve çok güzel taktikler kullanıyor, memnun kaldım. Tavsiye ederim.
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

export default s3