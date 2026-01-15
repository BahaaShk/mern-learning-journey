import { useState } from "react"
import Navbar from "../components/Navbar"
import RateLimit from "../components/RateLimit";

const HomePage = () => {
  const [isRateLimted, setIsRateLimited] = useState(false);

  return (
    <div className=' min-h-screen'>
      <Navbar />
{isRateLimted && <RateLimit />}
    </div>
  )
}

export default HomePage