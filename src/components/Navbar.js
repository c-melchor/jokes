import React from "react";

export default function Navbar() {
    return (
        <div className="flex bg-red-400 w-screen py-2 align-text-bottom">
            <div className="w-2/4">
                <p className="text-xl pl-3 text-white">Christina Melchor</p>
            </div>
            <div className=" w-2/4">
                <ul className="flex flex-row justify-around align-end text-white text-md">
                    <li className="px-2 border-3">
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/c-melchor" className="px-2" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li>
                        <i class="fab fa-linkedin"></i>

                        <a href="https://www.linkedin.com/in/camelchor/" className="px-2" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}
