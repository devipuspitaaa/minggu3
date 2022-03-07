// agar function arrow HelloComponent berjalan di react maka tambahkan react
import React from "react";
import './HelloComponent.css';

const HelloComponent = () => {
    return <p className='text-p'> Ini adalah arrow function yang ada di folder </p>
}

//agar component ini dapat dipakai dimana aja
export default HelloComponent;