import Image from "next/image";
import BungaKiri from '../../assets/leaves-left.png'
import BungaKanan from '../../assets/leaves-right.png'
import MaskTop from '../../assets/mask.png'
import MaskBottom from '../../assets/mask_bottom.png'
import Pengantin from "./Pengantin/Pengantin";

export default function Mempelai() {

    return (
        <>
            <div className={"bg-color-pallete-750 bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-14"}>
                    <div className={"flex justify-center items-center text-center font-curs"}>
                        <p className={"text-white md:w-6/12 mb-8 md:text-4xl text-2xl mx-10"}>
                        "Sepasang kekasih tidak pada akhirnya bertemu di suatu tempat. <br/> Mereka berada satu sama lain selama ini."
                        </p>
                    </div>
                    <p className={"text-white flex justify-center items-center text-center md:mx-40 mb-8"}>
                        -- Jalaluddin Rumi Rumi --
                    </p>
                    <div className={"flex justify-center items-center content-center"}>
                        <Image src={BungaKiri} width={150} height={150}/>
                        <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>&nbsp;Groom
                            & Bride&nbsp;</h1>
                        <Image src={BungaKanan} width={150} height={150}/>
                    </div>
                    <br/>
                    <Pengantin/>
                </div>
                <div className={"flex md:-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
