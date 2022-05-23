import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/Resepsi.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";

export default function Waktu() {
    const showInMapClicked = () => {
        window.open("https://goo.gl/maps/25vVSCRXmaSJtvzV8");
    };

    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"container flex flex-wrap mx-auto pt-5"}>
                    <br/>
                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">

                        <Image src={Ring} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>
                            Upacara Pawiwahan</h1>
                        <p className={"font-bold"}>Minggu, 32 Desember 2022</p>
                        <p className={"font-bold"}>08:00 - 10:00</p>
                        <br/>
                        <p className={"font-bold"}>Desa Cacab, Kec. Penebel, Tabanan</p>
                        <p className={"px-16"}>Desa Cacab, Biaung, Penebel, Kabupaten Tabanan Bali 82181</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
                        <Image src={Wedding} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>Resepsi</h1>
                        <p className={"font-bold"}>Minggu, 05 Desember 2021</p>
                        <p className={"font-bold"}>11:00 - 16:00</p>
                        <br/>
                        <p className={"font-bold"}>Desa Cacab, Kec. Penebel, Tabanan</p>
                        <p className={"px-16"}>Desa Cacab, Biaung, Penebel, Kabupaten Tabanan Bali 82181</p>
                    </div>
                </div>
                <Timer/>
                <div className={"text-center mb-2"}>
                    <button
                        className="bg-color-pallete-750 hover:bg-color-pallete-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                        onClick={showInMapClicked}
                    >
                        <p className={"flex"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clipRule="evenodd"/>
                            </svg>
                            &nbsp;
                            Buka Google Maps
                        </p>
                    </button>
                </div>
                <div className={"mx-auto justify-center flex"}>
                    <iframe
                        className={"md:w-8/12 w-11/12"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.78177722698!2d115.1612272302073!3d-8.423079777553419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd225d389fc9011%3A0x49760d2db5b741a4!2sBalai%20Bajar%20Cacab%20Jangkahan!5e0!3m2!1sen!2sid!4v1653312864179!5m2!1sen!2sid"
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
