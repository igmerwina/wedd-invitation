import Image from "next/image";
import Erwin from '../../../public/erwincp.jpg'
import Iin from '../../../public/iin.jpg'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <div className={"h-[350px] w-[350px]"}>
                                <Image className={"rounded-full drop-shadow-lg"} src={Erwin}></Image>
                                <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 font-curs"}>-Erwin-</h1>
                                <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>
                                    IGM Erwin Ardiantha, M.T
                                </h1>
                                <br/>
                                <p className={"text-white mb-5 md:mb-0"}>
                                    Anak Kedua dari <br/> <span className={"font-bold"}>dr. IGP Winangun, Sp.PD <br/> & Dra. Ni Made Citra Resmi, M.M</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <div className={"h-[350px] w-[350px]"}>
                                <Image className={"rounded-full drop-shadow-lg"} src={Iin}></Image>
                                <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 font-curs"}>-Iin-</h1>
                                <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>
                                    Putu Ayu Indira Savitri, S.Si.Kom
                                </h1>
                                <p className={"text-white"}>
                                <br/>
                                    Anak Pertama dari <br/><span className={"font-bold"}> Ir. I Made Budiasa Astawa <br/> & Ir. Putu Nuryati (Alm)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Novi
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Novia
                            Trie Rizkiyanti,A.Md.Kes</h1>
                        <br/>
                        <p className={"text-white mb-5"}>
                            Putri Ketiga <br/><span className={"font-bold"}> Bpk. Abdul Hamid & Ibu Mas`ulah (Almh)
                    </span>
                        </p>

                    </div>
                    <div className={"flex items-center w-full justify-center"}>
                        <img
                            className={"rounded-full mr-10 w-[150px] h-[150px]"}
                            src="https://i.ibb.co/LvLqZYp/20211111-190428-removebg-preview-1-removebg-preview-4.png"
                            alt=""/>
                        <img
                            className={"rounded-full bg-auto h-[150px] w-[150px]"}
                            src="https://i.ibb.co/5Y5ryWq/IMG-20190116-230737-removebg-preview-removebg-preview-4.png"
                            alt=""/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Rifki
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Rifki
                            Okta Pratama,S.T</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Pertama <br/> <span className={"font-bold"}>Bpk. Nazwan & Ibu Eri Yanti</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
