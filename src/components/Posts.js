import { useState, useEffect } from "react";
import axios from "axios";


export default function Posts() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        axios.get("http://localhost:3001/images/")
        .then(response => {
            console.log(response);
            setData(response.data.photos);
        })
        // let files;
        // try{
        //     const response = await fetch("http://localhost:3001/");
        //     files = await response.json();
        //     console.log(files);
        //     setAbc(files);
        //     // files is now an array of file names, do what you want with that (create <img> tags, etc.)
        // } catch(err){
        //     console.error(err)
        // }
        // fetch("http://localhost:3001/images/post1.jpg")
        // .then((response)=>{
        //     console.log(response)
        // })
        // .then((data)=>{
        //     console.log(data);
        // })
    }

    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
            <div className="grid grid-cols-3 gap-8 px-6 py-6 mx-2 w-full lg:mx-56 lg:w-2/3">
                {data.map((item)=>{
                    return(
                    <div key={item.id} className="">
                        <img id={item.id} src={`http://localhost:3001${item.image}`} alt={item.name} />
                    </div>
                    )
                    })
                }
                {/* <div className="">
                    <img src={post1} alt="post1" />
                </div>
                <div className="">
                    <img src={post2} alt="post2" />
                </div>
                <div className="">
                    <img src={post3} alt="post3" />
                </div>
                <div className="">
                    <img src="http://localhost:3001/images/post1.jpg" alt="post4" />
                </div>
                <div className="">
                    <img src={post5} alt="post5" />
                </div>
                <div className="">
                    <img src={post6} alt="post6" />
                </div>
                <div className="">
                    <img src={post7} alt="post7" />
                </div>
                <div className="">
                    <img src={post8} alt="post8" />
                </div>
                <div className="">
                    <img src={post9} alt="post9" />
                </div> */}
            </div>
        </>
    );
}