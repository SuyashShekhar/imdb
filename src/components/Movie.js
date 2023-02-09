import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Movie() {
    const {movieId} = useParams();
    const url = `https://imdb-api.com/en/API/Title/k_tes6tu6w/${movieId}`
     
    const [data,setData] = useState();

    useEffect(() => {
        async function fun1(){
            const response = await axios.get(url);
            setData(response.data)
        }
        fun1()

    },[url])


  return (


    <div>
        <div className="coverImg">
            <img src="" alt="cover" className="coverMainimg" />
        </div>

        <div className="movieBody">
            <div className="movieContainer">
                <div className="movieRating">
                    <img src="" alt="displayPic" />
                    <p>
                        <span>imdbRating</span>/10
                    </p>
                </div>
                <div className="movieDescription">
                    <h1>title</h1>
                    <p>year</p>
                    <p>genre</p>
                    <p>desc</p>
                </div>
            </div>
            <div className="cast">
                <div className="castHeading">
                    <h1>Cast</h1>
                    <p>cast overview</p>
                </div>
                <div className="castName">
                    <div>
                        <Link className="actorLink" to='/'>
                            <div className="castActors">
                                <div className="castCircle">
                                    <img src="" alt="" className="cardImg" />
                                </div>
                                <div className="castActorName">
                                    <h2>actor name</h2>
                                    <p>character</p>
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movie