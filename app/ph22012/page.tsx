import React from "react";
import { Metadata } from "next";
import Top1 from '@/public/Top1.jpg'
import Top2 from '@/public/Top2.jpg'
import Top3 from '@/public/Top3.jpg'
import Image from "next/image";

const TopPeliculas = () =>{
    return(
        <div className="grid grid-cols-5 grid-rows-5 h-screen w-screen">            
            <div className="col-[1/4] row-[1/6] bg-yellow-400 overflow-hidden">
                <h1 className=" text-center font-bold">Top 1</h1>
                <h2 className="text-left ">
                     <p>Titulo: Rocky</p>
                     <p>Descripcion: La primera entrega de Rocky, es buenisima.</p>
                </h2>
                
                <Image src={Top1} alt="" className="relative w-full h-full object-contain object-right-bottom"/>
            </div>
            <div className="col-[4/6] row-[1/4] bg-gray-600 overflow-hidden">
            <h1 className=" text-center font-bold">Top 2</h1>
                <h2 className="text-left ">
                     <p>Titulo: Creed II</p>
                     <p>Descripcion: Aca vuelve el hijo de Ivan Drago, ta re duro.</p>
                </h2>
                
                <Image src={Top2} alt="" className="relative w-full h-full object-contain object-right-bottom"/>
            </div>
            <div className="col-[4/6] row-[4/6] bg-orange-500 overflow-hidden">
            <h1 className=" text-center font-bold">Top 3</h1>
                <h2 className="text-left ">
                     <p>Titulo: Club de la pelea </p>
                     <p>Descripcion: Cada dia mas esquizofrenico</p>
                </h2>
                
                <Image src={Top3} alt="" className="relative w-full h-full object-contain object-right-bottom"/>
            </div>
        </div>
    )
}

export default TopPeliculas;