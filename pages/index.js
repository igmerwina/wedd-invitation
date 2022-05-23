import Landing from "../components/Landing/Landing";
import Mempelai from "../components/Content/Mempelai";
import {useState} from "react";
import Waktu from "../components/Content/Waktu";
import ProtokolKesehatan from "../components/Content/ProtokolKesehatan";
import Music from "../components/Content/Music";
import {useSpring, animated} from "react-spring";
import Wish from "../components/Content/Wish";
import Footer from "../components/Content/Footer";
import Head from "next/head";

export default function Home() {
    const [invited, changeInvited, setInvited] = useState(false)
    const [tamu] = useState("IGN Wiratmaja Puja & Family")

    const fade = useSpring({
        opacity: invited ? 0 : 1,
        delay: 50
    })
    return (
        <>
            <Head>
                <meta charset={"UTF-8"}/>
                <title>The Wedding Of Erwin & Iin</title>
                <meta name="description" content=" Erwin & Iin Wedding Invitation"/>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Erwin & Iin" />
                <meta property="og:image:width" content="1296" />
                <meta property="og:image:height" content="864" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="ya:ovs:upload_date" content="2018-11-10" />
                <meta property="ya:ovs:allow_embed" content="true" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
                <animated.div style={fade}>
                {/* <Music/> */}
                <Landing guest={tamu}/>
                <Mempelai/>
                <Waktu/>
                <ProtokolKesehatan/>
                <Wish guest={tamu}/>
                <Footer/>
                </animated.div>
        </>
    )
}
