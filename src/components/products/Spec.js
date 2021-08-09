import React from 'react'

export default function Spec() {
    return (
        <div className=" border border-green-800 rounded-lg">
            <table class="font-spartan text-lg p-10">
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
                        <td className="bg-green-200">11 kg</td>
                    {/* <td>858</td> */}
                    </tr>
                    <tr class="bg-blue-200">
                        <td>Jangkauan</td>
                        <td>500 cm</td>
                        {/* <td>112</td> */}
                    </tr>
                    <tr>
                        <td className="table-spec">Kenaikan DO</td>
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
                    <tr>
                        <td>Dimensi total</td>
                        <td>17 cm x 17 cm x 11 cm</td>
                        {/* <td>1,280</td> */}
                    </tr>
                    <tr>
                        <td>Cakupan sembur</td>
                        <td>10 m&sup2;</td>
                        {/* <td>1,280</td> */}
                    </tr>
                    <tr>
                        <td>Penurunan O<sub>2</sub></td>
                        <td>0.2 mg/L (dalam keadaan STP)</td>
                        {/* <td>1,280</td> */}
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
