import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../components/footer'
// import { Link } from 'react-router-dom'

export default function Mainpage() {

    const refdest = useRef()
    const btnScroll = () => 
    {
        window.scrollTo({
        // top: refdest.current.offsetTop - 180,
        top: refdest.current.offsetTop -40,
        behavior:"smooth"

    });
    }
    return (
        <section className="pt-20">
            <section className="py-20 px-6 lg:px-20 bg-banooWhite">

            
            <h1 className=" font-spartan text-center font-bold text-banooDark text-2xl iphone7plus:text-3xl ">
                KESEMPATAN MAGANG DI BANOO
            </h1>
            <h2 className="pt-10 lg:px-10 font-serif-6 font-bold text-lg md:text-xl text-banooGray text-center tracking-wide lg:leading-relaxed">
                Banoo Inovasi Indonesia membuka kesempatan Kuliah Lapangan atau Kerja Praktik atau Magang sesuai dengan kebutuhan Mahasiswa dan program Banoo yang tersedia.
            </h2>
            <h2 className="font-serif-6 font-semibold text-banooGray text-center text-base pt-4">
            Program Magang yang sedang tersedia di Banoo yaitu &nbsp;
            <strong>Project Design &amp; Numerical Simulation, Project Riset &amp; Pemasaran Bidang Akuakultur, Finance,</strong> dan <strong>Human Resources Generalist.</strong> 

            </h2>

            {/* kualifikasi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-8 xl:gap-x-14 pt-20">
            <div className="rounded-lg bg-yellow-100 py-14 px-8 shadow-lg">
                <h2 className="text-lg font-spartan font-bold text-banoo pb-4">
                    Kualifikasi yang dibutuhkan:
                </h2>
                <ul className="list-disc font-serif-6 text-base pl-6 space-y-2 text-banoo">
                    <li>
                    <p className=" text-gray-600">
                            Mahasiswa aktif Perguruan Tinggi di Indonesia (diutamakan berdomisili atau sedang berada di Yogyakarta dan Klaten) <strong>minimal semester 5.</strong>
                        </p>
                    </li>
                    
                    <li>
                    <p className=" text-gray-600">
                            Memiliki latar belakang jurusan <strong>Perikanan, Teknik Mesin, Akuntansi, Ilmu Ekonomi, Manajemen, Psikologi</strong> atau <strong>ketertarikan terhadap dunia perikanan.</strong> 
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                            PRIBADI YANG CAK CEK SAT SET DAN CERIA.
                        </p>
                    </li>
                </ul>
            </div>

            {/* prosedur */}
            <div className="rounded-lg bg-yellow-100 py-14 px-8 shadow-lg">
                <h2 className="text-lg font-spartan font-bold text-banoo pb-4">
                    Prosedur pendaftaran:
                </h2>
                <ul className="list-disc font-serif-6 text-base pl-6 space-y-2 text-banoo">
                    <li className="">
                        <p className=" text-gray-600">
                        Mengisi formulir pendaftaran magang &nbsp;
                        <strong className="underline cursor-pointer text-yellow-600 hover:text-banoo" onClick={btnScroll}>di bawah.</strong>
                        </p>
                    </li>
                    
                    <li>
                    <p className=" text-gray-600">
                        Mencantumkan salah satu program yang diminati (<strong>Project Design &amp; Numerical Simulation, Project Riset &amp; Pemasaran Bidang Akuakultur, Finance,</strong> atau <strong>Human Resources Generalist) </strong> pada <strong className="italic">Cover Letter. </strong>
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                        <strong>CV, <i>Cover Letter</i>, Proposal Magang,</strong> dan <strong>scan KTM </strong>dikirimkan dalam <strong> format PDF</strong> dan <strong>dapat menggunakan Bahasa Indonesia atau Bahasa Inggris.</strong>
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                        Setelah proses submit, tim recruitment Banoo akan menyeleksi dan menghubungi kandidat yang memenuhi syarat untuk proses selanjutnya.
                        </p>
                    </li>
                </ul>
            </div>


            </div>

            <div ref={refdest} className="text-center pt-20 pb-10">
                <h2 className="text-3xl pb-10 font-spartan text-banooDark font-bold">
                    Are you ready?
                </h2>
                <Link to="/internship" className="">
                    <button className="font-spartan font-bold tracking-wide bg-yellow-600 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 py-8 rounded-full shadow-xl text-white hover:bg-banooDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-banooDark">
                        Isi formulir sekarang

                    </button>
                
                </Link>

            </div>
            
            {/* catatan */}
            <div className="text-gray-500 font-serif-6 py-10">
                <h2 className="italic pb-4 font-bold text-base font-spartan">
                    CATATAN:
                </h2>
                <ul className="list-disc pl-6 text-sm md:text-base">
                    <li>
                        <p>
                        Tidak ada deadline atau batas waktu untuk pendaftaran, hanya berlaku pembatasan kuota mahasiswa untuk setiap project.
                        </p>
                        
                    </li>
                    <li>
                        <p>
                        Durasi KL/KP/Magang sesuai dengan kebutuhan mahasiswa atau program Banoo.
                        </p>
                        
                    </li>
                    <li>
                        <p>
                        Kesempatan KL/KP/Magang bersifat sukarela atau <i>unpaid</i>. Pemagang akan mendapatkan sertifikat, pengalaman bekerja di <i>start-up</i> dan mentoring bersama founder Banoo.
                        </p>
                        
                    </li>
                    
                    <li>
                        <p>
                        Apabila masih ada pertanyaan atau informasi yang kurang jelas dapat menghubungi <ins>recruitment@banoo.id</ins> atau sosial media Banoo.
                        </p>
                        
                    </li>
                </ul>
            </div>

            
            
            </section>
            {/* <Footer/> */}
        </section>
    )
}
