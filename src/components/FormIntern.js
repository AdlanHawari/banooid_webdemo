import axios from 'axios'
import React, { useReducer, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Dropzone from './form/Dropzone'
import FailUI from './form/FailUI'
import Submitting from './form/Submitting'
import SuccessUI from './form/SuccessUI'



export const ACTIONS = {
    ADD_FILE: 'add-file',
    CHANGE_FAILUI: 'change-failui'
}

function reducer(files, action){
    switch (action.type){
        case ACTIONS.ADD_FILE:
            return files.map(file =>{
                if(file.berkas === action.payload.berkas){
                    
                    return {...file, content: action.payload.content}
                }
                return file
            })
            
        default:
            return files
    }

}

function failReducer(failState, action){
    switch(action.type){
        case ACTIONS.CHANGE_FAILUI:
            failState = action.payload
            return failState
        
        default:
            return failState
    }
}




export default function FormIntern({t}) {
    // const {t, i18n}  =useTranslation();
    
    const [files, dispatch] = useReducer(reducer, 
        [
            {
                berkas:"ktm",
                label:"KTM",
                // preview:
                content:{}
            },
            {
                berkas:"cv",
                label:"CV",
                content:{}
            },
            {
                berkas:"motlet",
                label:"Motivation Letter",
                content:{}
            },
            {
                berkas:"prop",
                // label:t("internship_form.proposal_0"),
                // label_add:t("internship_form.proposal_1"),
                content:{}
            }

        ])

    const [failState, failDispatch] = useReducer(failReducer, false)

    const formData = new FormData()

    const upload = () =>{
        // axios.post(process.env.BACKEND_SERVICE, formData, {
            axios.post(`${process.env.REACT_APP_BACKEND_SERVICE}`, formData, {
            headers : {'Content-Type': 'multipart/form-data' },
            timeout: 12000
        })
        .then(response =>{
            // console.log("response", response.data)
            if(response.data.msg==="sucess"){
                setclicked(false)
                setSuccess(true)
            }

        })
        .catch(err=>{
            // console.log("error:",err)
            setclicked(false)
            failDispatch({type:ACTIONS.CHANGE_FAILUI, payload:true})
            // setFail(true)
        })
    }
    // const upload = async()=>{
    //     try{
    //         // const resp = await axios.post(process.env.BACKEND_SERVICE, formData, {
    //         //     // headers: formData.

    //         // })
    //         const resp = await axios({
    //             method: 'post',
    //             data: formData,
    //             url:process.env.BACKEND_SERVICE,
    //             headers: {
    //                 "Content-Type": "multipart/form-data"

    //             }
    //         });
    //         // console.log("backend: ",resp);
            

    //     }catch(error){
    //         console.log("error backend: ",error);

    //     }

    // }

    const dataemailJs = {
        service_id: `${process.env.REACT_APP_SERVICE_ID}`,
        template_id: `${process.env.REACT_APP_TEMPLATE_ID}`,
        user_id: `${process.env.REACT_APP_USER_ID}`,
        // template_params: ""
        template_params: {

        name:"",
        phone:"",
        univ:"",
        jurusan:"",
        semester:""

        }
   }

    const sendEmailNotif = async () =>{
           
           dataemailJs.template_params = form_val;
           try{
                const resp = await axios.post(`${process.env.REACT_APP_EMAILJS_API}`,dataemailJs,{timeout: 10000 });
                // console.log("emailjs: ",resp.data);
           }
           catch (err){
                // Handle Error Here
                // setIsResp(true);
                // setIsFail(true);
                // console.error(err);
                
    
           }
    
       }
    const sendingForm = () =>{

        files.map((file)=>{
            // console.log("file: ",file.content)
            formData.append("berkas",file.content)
        })
        formData.append('time_stamp', new Date().toLocaleString());
        formData.append('nama', form_val.name);
        formData.append('email', form_val.email);
        formData.append('phone', form_val.phone);
        formData.append('univ', form_val.univ);
        formData.append('jurusan', form_val.jurusan);
        formData.append('semester', form_val.semester);
        // console.log("headers: ",formData.getHeaders())
        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        //  }

        upload();

        // console.log(formData)
        // formData.append("berkas",)
    }

    const [form_val, setFV] = useState({
        name:"",
        email:"",
        phone:"",
        univ:"",
        jurusan:"",
        semester:"",
        ktm:"",
        cv:"",
        motlet:"",
        prop:""
    });

    // var dataform = {
    //     name:"",
    //     phone:"",
    //     univ:"",
    //     jurusan:"",
    //     semester:""
    // }

    const recaptchaRef = useRef()
    const [isVerif, setIsverif] = useState(false);

    function onChange(value) {
        // const recaptchaValue = recaptchaRef.current.getValue();
        // console.log("getvalue:", recaptchaValue);
        setIsverif(true);
        // console.log("Captcha value:", value);
        // console.log(cl);
        if(value){
            // console.log("not a robot"); 
        }
        // console.log("resetting");
        // setTimeout(() => {
            
        //     recaptchaRef.current.reset();
            
        // }, 3000);
      }

    function onExpired(){
        setIsverif(false);
        // recaptchaRef.execute();
      }

      function onError(){
        recaptchaRef.current.reset();
        console.log("recaptcha error");
      }

    const handleChange = (e) => {
        // const key 
        // dataform[e.target.name] = e.target.value;
        setFV({...form_val, [e.target.name]: e.target.value});
        // console.log(data);
    };

    const [clicked, setclicked] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        
        e.preventDefault();
        setclicked(true);
        // dataform.current.timestamp = new Date().toLocaleString();
        console.log("submitted");
        sendingForm();
        sendEmailNotif();
        // if(e.target.checkValidity()){
        //     console.log("submitted");
        //     // submitEvent();
        //     // sendEmailNotif();
        //     // sendingForm();


        // }
        
    }

    
    // console.log("personalinfo: ",form_val)
    // console.log("env: ",`${process.env.REACT_APP_EMAILJS_API}`)
    // console.log("failstate: ", failState)
   
    

    return (
        <div className="bg-white pt-10">  
            <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">{t("internship_form.name")}</label>
                    <div className="mt-1">
                        <input id="name" name="name" placeholder={t("internship_form.hint_name")} type="text" value={form_val.name} onChange={handleChange} autoComplete="" required className="text-base md:text-sm w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">{t("internship_form.email")}</label>       
                    <div className="mt-1">
                        <input id="email" name="email" placeholder={t("internship_form.hint_email")} type="email" value={form_val.email} onChange={handleChange} autoComplete="email" required className="text-sm  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                    </div>
                    
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">{t("internship_form.phone")}</label>
                    <div className="mt-1">
                        <input id="phone" name="phone" placeholder={t("internship_form.hint_phone")} type="number" value={form_val.phone} onChange={handleChange} autoComplete="" required className=" text-base md:text-sm w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark "/>
                    </div>
                </div>

                <div>
                    <label htmlFor="univ" className="block text-sm font-bold text-gray-700">{t("internship_form.univ")}</label>
                    <div className="mt-1">
                        <input id="univ" name="univ" placeholder={t("internship_form.hint_univ")} type="text" value={form_val.univ} onChange={handleChange} autoComplete="" required className=" text-base md:text-sm w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                    </div>
                </div>

                <div> 
                    <label htmlFor="jurusan" className="block text-sm font-bold text-gray-700">{t("internship_form.major")}</label>
                    <div className="mt-1">
                        <input id="jurusan" name="jurusan" placeholder={t("internship_form.hint_major")} type="text" value={form_val.jurusan} onChange={handleChange} autoComplete="" required className=" text-base md:text-sm w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="semester" className="block text-sm font-bold text-gray-700">{t("internship_form.semester")}</label>
                    <div className="mt-1">
                        <input id="semester" name="semester" placeholder="" type="number"  value={form_val.semester} onChange={handleChange}autoComplete="" required className=" text-base md:text-sm w-14 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark "/>
                    </div>
                </div>

                {/* file */}
                {files.map((file,index)=>(

                    <div
                        key={index}>
                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2">
                            <label htmlFor={file.berkas} className="block text-sm font-bold text-gray-700">{t(`internship_form.file.${index}.type`)}</label>
                            <label htmlFor={file.berkas} className="block text-xs iphone5:text-sm font-medium text-gray-700 italic">{t(`internship_form.file.${index}.add`)}</label>

                            </div>
                        
                        <div className="flex flex-col rounded-xl shadow-xl bg-gray-300 w-full mt-1">
                        {/* <input id="dropzone" name="dropzone" type="text" value={file.content.length>0?file.content.path:null} required className="absolute -z-10 h-4 w-4 rounded-xl ml-20"/> */}

                            <input id="dropzone" name="dropzone" type="text" value={file.content.path?file.content.path:""} required className="opacity-0 h-2 w-2 absolute rounded-xl ml-20"/>
                            
                            
                            
                            <Dropzone filetype=".pdf" dispatch={dispatch} berkas={file.berkas}/>
                             
                            {file.content.path&&(
                                <div className="px-8 pb-4 flex space-x-4 font-serif-6 text-sm text-gray-600">
                                    
                                    <div className="">{file.content.name}</div>
                                        <span>-</span>
                                        <div className="">{(file.content.size/1e6).toFixed(2)} MB</div>
                                    </div>
                                

                            )}
                                
                            
                        </div>
                    </div>      
                ))}


                <div className="flex pt-2 justify-center">
                                        
                    <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                    onChange={onChange}
                    onErrored={onError}
                    onExpired={onExpired}
                    size=""
                    className="relative"
                    
                    >
                    <input type="text" value={isVerif?"1":""} required className="cursor-default absolute bottom-0 h-1 w-1 -z-10 opacity-0"/>
                            
                    </ReCAPTCHA>
                </div>
                
                {/* <input name="image" type="file" /> */}
                <div className="">

                    <button className="font-spartan font-bold uppercase tracking-widest w-full py-6 sm:py-8 px-4 border border-transparent rounded-xl shadow-xl text-sm text-white bg-banooDark hover:bg-banooDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-banooDark">
                        {t("internship_form.button")}
                    </button>

                </div>




            </form>

            

            {/* <Warning/> */}
            {/* <Submitting/> */}
            {clicked&&(
                <Submitting/>

            )}
            
            {/* <SuccessUI/> */}
            {success&&(
                <SuccessUI t={t}/>
            )}

            {failState&&
            (
                <FailUI t={t} dispatch={failDispatch} currentState={failState}/>

            )}
            
            
        </div>
    )
}
