import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import ScrollContact from './ScrollContact';

const scrollToRef = (ref) => window.scrollTo(0,ref.current.offsetTop);

export default function Contactform({t}) {

    // const messageSection = useRef(null);

    // const gotomessageSection = () =>
    // window.scrollTo({
    //     top: messageSection.current.offsetTop,
    //     behavior: "smooth"
    // });
    

    const messageSection = useRef(null);
    const executeScroll = () => scrollToRef(messageSection);

    const [msgSend, setmsgSend] = useState(0);
    const [btnClicked, setbtnClicked] = useState(0);

    
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm("service_oha8zaf", "template_k69o7ct", e.target, "user_1TukFgS7brH42xGDkWEiI")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset();
        setbtnClicked(true);

        setTimeout(()=>{
            setmsgSend(true);
            setbtnClicked(false);
            e.target.reset();
            // <ScrollContact/>
            // window.scrollTo({top: 600,
            // behavior: "smooth"})
            // gotomessageSection();
            executeScroll();

        }, 3000)
        // setmsgSend(true);
        
    }


    return (
        <div className="block" ref={messageSection} >
            {/* <div className="bg-white py-6 px-6 shadow rounded-lg"> */}
            
            <div className={ msgSend ? 
                "hidden" :
                "bg-white py-6 px-6 shadow rounded-lg"
                }>
                
                {/* <form className="space-y-6" action="#" method="POST"> */}
                <form className="space-y-6" onSubmit={sendEmail}>
                {/* <form className="space-y-6" onSubmit={clickBtn}> */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                            {t("contact.form.name")}
                        </label>
                        <div className="mt-1">
                            <input id="name" name="name" placeholder={t("contact.form.name_p")} type="text" autoComplete="" required className=" text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>

                        </div>
                        
                    </div>

                    <div>
                        <div className="flex">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700">
                                {t("contact.form.email")}
                            </label>
                            <label htmlFor="email" className="text-sm italic text-gray-700 pl-2">
                                ({t("contact.form.optional")})
                            </label>
                            
                            
                        </div>
                        
                        
                        <div className="mt-1">
                            <input id="email" name="email" placeholder={t("contact.form.email_p")} type="email" autoComplete="email" className="text-sm  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>

                        </div>
                        
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700">
                            {t("contact.form.subject")}
                        </label>
                        <div className="mt-1">
                            <input id="subject" name="subject" placeholder={t("contact.form.subject_p")} type="" autoComplete="" required className=" text-sm  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700">{t("contact.form.phone")}</label>
                        <div className="mt-1">
                            <input id="phone" name="phone" placeholder={t("contact.form.phone_p")} type="number" autoComplete="" required className=" text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark "/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700">{t("contact.form.message")}</label>
                        <div className="mt-1">
                            <textarea id="message" name="message" placeholder={t("contact.form.message_p")} type="text" autoComplete="" required className="h-40 text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>

                        </div>
                        
                    </div>

                    <div>
                        <button disabled={btnClicked?
                        true:false} 
                        type="submit" className="w-full flex justify-center py-6 px-4 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-banooDark hover:bg-banooDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-banooDark" 
                        >
                            {btnClicked ? 
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin"></FontAwesomeIcon>:
                            `${t("contact.form.button")}`
                            }
                            

                            {/* </svg> */}
                            
                        
                        

                        </button>
                        
                    </div>

                </form>
                
            </div>

            <div className={ msgSend ? 
                "items-center":
                "hidden"}>
                <h2 className="font-spartan font-extrabold text-lg xl:text-4xl" >
                    {t("contact.sent.title")}
                </h2>
                <p className="font-spartan pt-10 lg:pt-14 xl:pt-20 text-sm xl:text-base text-justify leading-loose">
                    {t("contact.sent.msg")}
                </p>
            </div>
        </div>
        
    )
}
