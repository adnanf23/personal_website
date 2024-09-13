import Typografi, {typografiData} from "./Typografi";
import LogoPojoksatu from "../assets/Logo Pojoksatu.png";

function Career (){
    return (
        <div
            id="career" 
            className="
                        w-[100%] flex flex-col gap-10 h-[130vh] justify-center
                        lg:w-[50%]
                        "
        >
            <div className="div">
                <Typografi items={[typografiData[3]]}/>
            </div>
            <div className="
                        flex flex-col gap-1
                        "
            >
                <p className="
                            font-poppins text-paragraph mb-[-7px]
                            "
                >
                    current career :
                </p>
                <div className="
                           bg-box py-3 px-5 shadow-md rounded-[8px]
                           md:w-[400px]
                           lg:w-[300px]
                            "
                >
                    <div className="
                                 title flex items-center gap-3
                                 "
                    >
                        <img src={LogoPojoksatu} alt="Logo Pojoksatu" 
                             className="
                                    w-[40px] h-[100%]
                                    md:w-[60px]
                                    " 
                        />
                        <div className="
                                    text
                                    "
                        >
                            <h3 className="
                                        font-madimi text-heading text-[5vw]
                                        md:text-[4vw]
                                        lg:text-[1.4vw]
                                        "
                            >
                                Pojoksatu.id
                            </h3>
                            <p className="
                                        font-poppins text-paragraph text-[4vw] mt-[-6px]
                                        md:text-[3vw]
                                        lg:text-[1vw]
                                        "
                            >
                                Freelance
                            </p>
                        </div>
                    </div>
                    <p className="
                                text-paragraph font-poppins text-[3.6vw]
                                md:text-[2.7vw]
                                lg:text-[0.8vw]
                                "
                    >
                    As a video editor whose job is to create the latest and viral news videos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Career