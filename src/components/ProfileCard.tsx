import Image from "next/image";

export default function ProfileCard() {
    return (
        <div>
            <h2 className="text-white"> Profile Card</h2>
            <div className="card-wrapper max-w-[350px] bg-white text-black rounded-md flex flex-col items-center px-4 py-6">
            
                <div className="ImgWrapper">
                    <Image
                        className="rounded-full"
                        src="/profile.png"
                        alt="modern living room"
                        width={64}
                        height={64}
                        priority
                    />
                </div>
                <div className="cardDataWrapper flex flex-col gap-4 pt-6">
                    
                    <div className="copyWrapper flex flex-col text-center">
                        <p className="cardName font-semibold text-lg ">Sarah Dole</p>
                        <p className="cardTitle text-neutral-600">Front End Engineer @ Microsoft</p>
                        <p className="cardCopy text-neutral-600 py-4">I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
                    </div>

                    <a role="button" 
                    className="gap-4 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-300 block focus:outline-2 focus:outline-offset-2 focus:outline-[#444CE7] text-center py-2 rounded-md text-white"
                     href="#">Contact Me</a>
                    <div className="socialWrapper py-4 flex justify-center gap-6">
                    <a role="button" 
                    className=""
                     href="#">
                        <Image
                            className="transition-colors duration-300 block focus:outline-2 focus:outline-offset-2 focus:outline-[#444CE7]"
                            src="/github-fill.svg"
                            alt="modern living room"
                            width={30}
                            height={30}
                            priority
                        />
                 </a>
                 <a role="button" 
                    className="transition-colors duration-300 block focus:outline-2 focus:outline-offset-2 focus:outline-[#444CE7]"
                     href="#">
                        <Image
                            className="rounded-full"
                            src="/linkedin-box-fill.svg"
                            alt="modern living room"
                            width={30}
                            height={30}
                            priority
                        />
                    </a>
                    <a role="button" 
                    className="transition-colors duration-300 block focus:outline-2 focus:outline-offset-2 focus:outline-[#444CE7]"
                     href="#">
                        <Image
                            className="rounded-full"
                            src="/instagram-fill.svg"
                            alt="modern living room"
                            width={30}
                            height={30}
                            priority
                        />
                    </a>
                    <a role="button" 
                    className="transition-colors duration-300 block focus:outline-2 focus:outline-offset-2 focus:outline-[#444CE7]"
                     href="#">
                        <Image
                            className="rounded-full"
                            src="/twitter-fill.svg"
                            alt="modern living room"
                            width={30}
                            height={30}
                            priority
                        /> 
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}