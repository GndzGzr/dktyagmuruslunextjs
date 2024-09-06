
import Image from "next/image";

const s2 = () => {
    return (
        <div className="bg-[#FFD0EC] px-64 py-12">

            <div className="grid grid-cols-8 pt-12">
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
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">9 Temmuz 2024</time>
                                        </div>
                                        <p class="text-base">Uzmanımız Yağmur Hocama ortak tanıdığımız aracılığıyla ulaştım, eve gelme şansını bize tanıdı hocamız.
                                            Oğlumun dil ve konuşma gecikmesi vardı, evdeki seans sonucunda çalışmalara başladık.
                                            Aşırı sevecen ve özverili tavrıyla seanslarımız çok başarılı geçiyor. Süreçteki yönlendirmeleri ve videolar sonucu iyi bir ilerleme kat ettik. İyi ki var ve iyi ki onu tanıdık.</p>


                                    </div>

                                </div>

                            </div>
                            <div className="carousel-item h-full">

                                <div class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">
                                    <div class="w-full text-left">
                                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                                            <h3 class="font-bold text-lg">P...
                                            </h3>
                                            <time class="text-xs" datetime="2022-11-13T20:00Z">27 Şubat 2024</time>
                                        </div>
                                        <p class="text-base">Oğlumun yaşıtlarına göre geç konuşması olduğu için Yağmur Hanım'la iletişime geçtim. Çok güzel bir süreç geçirdik, uzmanınız gayet başarılı. Çocuğuma gayet güzel şefkatli, sabırlı, en önemlisi terapi verdiği çocuğun yaşına inebilen ve onunla çok başarılı bir şekilde iletişim kurabilen bir uzman.</p>


                                    </div>


                                </div>

                            </div>
                        </div>



                    </div>




                </div>
                <div className="grid col-span-3 bg-seans-second h-screen bg-contain bg-no-repeat bg-center rounded-lg">
                    <div className="px-8" >

                        <h1 className="text-4xl py-12 font-bold text-center">Gelişimsel Dil (Gecikmiş Konuşma)</h1>
                        <ul className="pt-36 text-black text-xl font-medium list-disc px-8 ">
                            <li className="pb-2">Süre: haftada 1 veya 2 gün</li>
                            <li className="pb-2">Seans Süresi: 40 dakika    </li>
                            <li className="">Amaç: <br></br>Çocuğun normalin dışında olan dil gelişimini standart düzeye getirmek</li>
                        </ul>
                        <button style={{ borderColor: "white" }} className="seansButton">Daha Fazla</button>


                    </div>

                </div>


            </div>
        </div>
    );
}

export default s2