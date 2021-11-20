import React, {  useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ACTIONS } from '../FormIntern'
import pdf_icon from '../../images/form/pdf.png'


export default function Dropzone({filetype, dispatch, berkas}) {

    const [oversize, setoversize] = useState(false)
    
    var maxS=0;
    if(berkas==="prop"){
        maxS = 5e6;
    }else{
        if(berkas==="ktm"){
            maxS = 1e6;
        }else{
            maxS = 3e6;
        }

    }
    const [rejected, setRejected] = useState(false)
    const onDrop = useCallback(
        (acceptedFile, fileRejection) => {
            
            
            // acceptedFile.map(file => )
            // b = URL.createObjectURL(acceptedFile[0])
            // console.log(b)
            // URL.createObjectURL(file)
            if(acceptedFile.length>0){
                console.log("acc: ",acceptedFile);
                
                setRejected(false);
                dispatch({ type: ACTIONS.ADD_FILE, payload: {berkas:berkas, content: acceptedFile[0] }})
            }else if(acceptedFile.length==0){
                console.log("wadidaw: ",fileRejection);
                // setoversize(true);
                setRejected(true);
                dispatch({ type: ACTIONS.ADD_FILE, payload: {berkas:berkas, content: {}}})
            }
            console.log("length: ",acceptedFile.length);
            
            
        },
    [])
    
    const {getRootProps, getInputProps, isDragAccept, isDragReject} = 
        useDropzone({
            onDrop,
            multiple:false,
            accept:filetype,
            // maxSize: 1e+6, //1MB
            maxSize: maxS,
            maxFiles:1,


        });
    useEffect(() => {
        // console.log(filetype)
    }, [])

    // console.log("isi: ",rejected)

    return (
        <div>
            <div {...getRootProps()}
            className="w-full h-64 sm:h-80 p-4 rounded-xl focus:outline-none focus:border-0 focus:ring-0 ">
                <input {...getInputProps()}/>
                <div className="border-dashed border-2 border-white h-full w-full ">
                    {isDragReject ? 
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-center text-red-600 font-bold font-spartan text-lg">Berkas ditolak</p>
                </div>
                    :
                    <div className="flex flex-col justify-center items-center h-full space-y-4">
                        {rejected&&(
                        <div className="text-center text-red-600 font-bold font-spartan text-lg">
                            <p>Berkas ditolak</p>
                        </div>
                        )}
                        <img src={pdf_icon} className="h-10"/>
                        {/* <svg class="w-10 h-10 text-banooGray " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg> */}

                        <p className="font-spartan text-banooGray text-xs md:text-sm text-center font-bold">Drag and drop file here, <br/>or click to select file</p>
                        <div className="block text-center font-serif-6 text-banooGray font-bold">
                            <p className="text-xs">Hanya berkas {filetype} yang diizinkan</p>
                            <p className="text-xs">Ukuran maksimal {(maxS/1e6).toFixed(0)} MB  </p>

                        </div>
                    </div>
                    }
                    

                </div>

            </div>
                
            
        </div>
    )
}
