import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube';
import Model3D from '../components/Model3D';
import mvp from '../images/products/mvp.JPG'

function Products() {

    const onReady = (e) => {
        e.target.pauseVideo();
    }

    const opts = {
        // height: '390',
        height: '240',
        // width: '640',
        width: 'window.innerwidth',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    // const checkMobile = () =>{
    //     if(window.innerWidth<768){
            
    //     }
    // }
    
    // useEffect(() => {
    //     checkMobile();
        
    // }, [])
    

    document.title= "Banoo - Products";
    return (
        <section>
            
            
            <div className="pt-20">

                {/* Gambar */}
                <div className="flex flex-col py-20 md:flex-row md:px-40 items-center md:space-x-32 bg-blue-200">
                    <div className="flex-col space-y-6 order-last md:order-first">
                        <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                            Mycrofish
                        </h3>
                        <p className="">
                            Tingkatkan oksigen di kolam anda hingga 100% dengan konsumsi daya listrik yang lebih rendah. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, modi.
                        </p>
                        <div className="block">
                            <del className="text-red-600">Rp2.299.000</del>
                            <p className="">Rp1.500.000</p>
                        </div>
                        <a href="https://preorder.banoo.id " target="_blank" rel="noreferrer" className="flex w-1/2 justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                            <span  className="xl:px-16 font-serif-6 font-bold text-white text-sm  ">
                                Pre order
                            </span>
                            {/* <Link to='/preorder' className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                Pre order
                            </Link> */}
                        </a>


                    </div>
                    {/* <div className="w-full bg-" style={{backgroundImage: `url(${mvp})`}}>
                        wedew
                    </div> */}
                    <img src={mvp} alt="" className="h-96"/>
                    
                </div>

                {/* 3D model */}
                <div className="block bg-yellow-400 px-20 py-20 space-y-10 bg-brown-200">
                    <h2 className="flex justify-center">
                        3D Model
                    </h2>
                    <div className="bg-blue-300 h-screen">
                        <Model3D/>
                    </div>
                    
                </div>
                {/* end of 3D model */}

                {/* Deskripsi */}
                <div className="block py-20 space-y-10 bg-green-200 px-10 md:px-40">
                    <h2 className="flex justify-center">
                        Deskripsi
                    </h2>
                    <div className="">
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo excepturi rerum autem quas corrupti, blanditiis a, recusandae eligendi ea sequi iure quasi pariatur saepe, commodi est eos vero non! Deleniti voluptate tempore porro nostrum possimus dolorem asperiores cumque quam velit vero omnis doloremque similique voluptatum accusantium corrupti dolores iusto neque, reiciendis nam quae dolor adipisci! Nemo possimus itaque perspiciatis vero culpa, odio nihil quos repellat nam voluptate exercitationem totam labore modi quo voluptatem a explicabo dolores quia veniam voluptates hic ipsam earum est. Saepe, corporis modi. Veniam quos esse, aperiam provident asperiores facere harum ipsum nemo ratione odio blanditiis exercitationem.
                        </p>
                    </div>
                </div>

                {/* Video */}
                <div className="flex justify-center px-40 py-20 bg-red-200">
                    <div className="">
                        <YouTube
                            videoId="diwquYeL7DE" 
                            opts={opts} 
                            onReady={onReady}
                            className="rounded-xl"
                        />
                        {/* Video */}
                    </div>
                </div>

                {/* Spesifikasi */}
                <div className="block px-10 md:px-40 items-center justify-center h-screen bg-yellow-200">
                    <div className="">
                        Spesifikasi
                    </div>
                    <div className=" border border-green-800 rounded-lg">
                        <table class="">
                        {/* <table class="table-fixed border-collapse border border-green-800 rounded-lg"> */}
                            <thead>
                                <tr>
                                <th className="w-1/2"></th>
                                <th className="w-1/2"></th>
                                <th class=""></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className=" bg-red-200">Berat</td>
                                    <td className="bg-green-200">5 kg</td>
                                {/* <td>858</td> */}
                                </tr>
                                <tr class="bg-blue-200">
                                    <td>Jangkauan</td>
                                    <td>500 cm</td>
                                    {/* <td>112</td> */}
                                </tr>
                                <tr>
                                    <td>Kenaikan DO</td>
                                    <td>2 mg/L</td>
                                    {/* <td>1,280</td> */}
                                </tr>

                                <tr>
                                    <td>Tegangan</td>
                                    <td>220 volt</td>
                                    {/* <td>1,280</td> */}
                                </tr>
                                <tr>
                                    <td>Konsumsi listrik</td>
                                    <td>110 watt</td>
                                    {/* <td>1,280</td> */}
                                </tr>
                                <tr>
                                    <td>Ukuran gelembung</td>
                                    <td>40 &micro;m</td>
                                    {/* <td>1,280</td> */}
                                </tr>
                                <tr>
                                    <td>Jenis pompa</td>
                                    <td>Submersible</td>
                                    {/* <td>1,280</td> */}
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                {/* FAQ */}
                
                
            </div>

        </section>
     
        
    )
}

export default Products
