import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimit from "../components/RateLimit";

const HomePage = () => {
  const [isRateLimted, setIsRateLimited] = useState(true);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {

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