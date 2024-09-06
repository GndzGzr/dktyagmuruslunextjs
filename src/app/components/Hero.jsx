import Image from "next/image";
import heroImage from "../../../public/images/Image 2.png"
const hero = () => {
    return(
        <div>
            <Image src={heroImage}></Image>
        </div>

    );
}

export default hero;