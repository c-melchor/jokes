import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Jokes() {
    const [joke, setJoke] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(res => { setJoke(res.data) })
            .then(() => { setIsFetching(!isFetching) })
            .catch(err => { console.log(err) })
    }, [isFetching])

    const newJoke = () => {
        window.location.reload(false)
    }

    return (isFetching ? <div className="bg-grey-200 font-bold flex flex-col justify-center align-center font-arial text-black text-center h-screen ">
        <p className="text-5xl pb-5"> Jokes!<span role="img" aria-label="laughing smiley face" className="pl-1.5">🤣 </span></p>

        <h2>...loading</h2>
        <button onClick={newJoke} className="border-black m-auto mt-40 py-2 px-2 mt-10 bg-red-500 text-white rounded w-1/4">Make me laugh, clown</button>
    </div> :

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
