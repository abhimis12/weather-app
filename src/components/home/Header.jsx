import React from "react";
import Search from "./Search";
import "../css/nav.css";


export default function Header({ searchCity } ) 
{
    return ( 
        <>
            <div className="nav">
                <Search searchCity = {searchCity} />
            </div>
        </>
    );
}