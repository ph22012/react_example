import React from "react";
import { Metadata } from "next";

const TopPeliculas = () =>{
    return(
        <div className="grid grid-cols-5 grid-rows-5">
            <div className="col-[4/6] row-[1/4] bg-red-500">Pelicula 1</div>
            <div className="col-[1/4] row-[1/6] bg-green-500">Pelicula 2</div>
            <div className="col-[4/6] row-[4/6] bg-yellow-500">Pelicula 3</div>
        </div>
    )
}

export default TopPeliculas;