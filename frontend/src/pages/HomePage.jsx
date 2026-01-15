import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [isRateLimted, setIsRateLimited] = useState(true);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
try {
  const res = await axios.get("http://localhost:5001/api/notes");
  setNotes(res.data)
  setIsRateLimited(false)
  console.log(res.data);
} catch (error) {
  console.log("Error fetching data")
  if(error.response.status === 429){
    setIsRateLimited(true)
  } else {
    toast.error("Failed to load notes")
  }
} finally{
    setLoading(false)
  }
    }
    fetchNotes()
  }, [])
  
  return (
    <div className=' min-h-screen'>
      <Navbar />
{isRateLimted && <RateLimit />}
    </div>
  )
}

export default HomePage