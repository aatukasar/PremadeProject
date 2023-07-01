import React from 'react'
import { useEffect, useState } from "react"
import { useParams} from "react-router-dom";
import axios from 'axios'

function Home() {
    const [data, setData] = useState({});
  const { email } = useParams();
  useEffect(() => {
    const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8081/users/${email}`); // Replace with your actual API endpoint
          console.log(res.data)
          setData(res.data[0]);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  },[]);

  return <div class="p-3 mb-2 bg-light text-dark"><div>{data === {} ? <p>NoData</p> : <div>Name : {data.Name}<br></br>Email : {data.Email}<br></br>MobileNumber : {data.MobileNumber}<br></br>Age : {data.Age}<br></br> CollegeName : {data.CollegeName} </div>}</div> </div> ;
}

export default Home