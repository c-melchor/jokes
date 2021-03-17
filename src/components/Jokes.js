import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Jokes() {
    const [joke, setJoke] = useState([])

    useEffect(() => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(res => { setJoke(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    const newJoke = () => {
        window.location.reload(false)
    }

    return (
        <div className="bg-grey-200 font-bold flex flex-col justify-center font-arial text-black text-center h-screen">
            <p className="text-5xl pb-5"> Jokes!<span role="img" aria-label="laughing smiley face" className="pl-1.5">🤣 </span></p>
            <div key={joke.id}>
                <p className="text-3xl py-1">{joke.setup}</p>
                <p className="text-xl py-1">{joke.punchline}</p>
                <button onClick={newJoke} className="border-black py-2 px-2 mt-10 bg-red-500 text-white rounded">Make me laugh, clown</button>
            </div>
        </div>

    )
}
