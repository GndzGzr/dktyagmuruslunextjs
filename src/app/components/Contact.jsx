import Link from "next/link"
import {infos} from "../../../public/text/info"
const contact = () => {
    return (
        <div>
            <div className="bg-[#1C252E] text-center px-24 py-12">
                <h1 className="text-4xl pb-8 pt-4">Güçlü İletişim İçin İlk Adımı Atın</h1>
                <h1 className="text-6xl pb-8 pt-4">{infos.telNumber}</h1>
                <Link className="bg-[#6B56CE] rounded-lg p-4 mt-8 text-lg" href="/"> İletişime Geç</Link>
            </div>
        </div>
    )
}

export default contact