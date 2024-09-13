import Typografi, {typografiData} from "./Typografi";
import waIcon from '../assets/Footer_whatsapp.png'

const aboutList = [
    {heading: 'About', list: ['Gdev Id (Community)', 'Tech Synergy (bussines)'], icon: null, src: ['', '', '']},
    {heading: 'Contact', list: ['+62 8828 9158 984', '_adnanf23', 'adnanfauzanm23@gmail.com'], icon: [waIcon, ], src: ['','','']},
]

function Footer(){
    return (
        <footer
        id="footer"
        className="
        px-14 bg-box mt-40 pt-32
        md:px-14 z-[-1]
        lg:px-40"
        >
            <div className="
                        conten flex flex-col gap-20
                        lg:flex-row
                        "
            >
                <div className="row">
                    <Typografi items={[typografiData[5]]} />
                </div>
                {aboutList.map((item, index) => (
                    <div key={index}>
                        <h1
                        className="
                        text-heading text-[8vw] font-madimi
                        lg:text-[3vw]
                        ">
                            {item.heading}
                        </h1>
                        <ul className="
                                    flex flex-col gap-3
                                    "
                        >
                            <a href={item.src[0]}>
                                <li
                                    className="
                                        text-paragraph font-poppins text-[3vw]
                                        lg:text-[1.3vw]
                                    "
                                >
                                   {item.list[0]}
                                </li>
                            </a>
                            <a href={item.src[1]}>
                                <li
                                    className={`
                                        text-paragraph font-poppins text-[3vw]
                                        lg:text-[1.3vw]
                                    `}
                                >
                                    {item.list[1]}
                                </li>
                            </a>
                            <a href={item.src[2]}>
                                <li
                                    className={`
                                        text-paragraph font-poppins text-[3vw]
                                        lg:text-[1.3vw]
                                    `}
                                >
                                    {item.list[2]}
                                </li>
                            </a>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="lisense mt-20">
                <hr className="
                border-[1px] border-heading
                "
                />
                <p className="text-center text-paragraph pb-[10px]">
                    Created By Adnan Fauzan
                </p>
            </div>
        </footer>
    )
}

export default Footer