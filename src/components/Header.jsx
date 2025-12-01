import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {
  signOut(auth).then(() => {
    navigate("/login");
  }).catch((error) => {
    console.error("Error signing out:", error);
  });
}
  return (
    <div className=' w-full absolute bg-linear-to-b from-black to-transparent p-4 space-x-2 z-10'>
      <div className='flex gap-0 w-10/12 mx-auto justify-between'>
      <Link to="/">
      <h1 className='text-4xl p-2 font-bold text-red-700 '>♞ GambitFlix</h1>
 </Link>
      {user && 
      <button onClick={handleSignOut} className=' px-4 py-2 rounded-md text-white font-semibold hover:bg-red-800 transition '>
        Sign out</button>}
      </div>
    </div>
  )
}

export default Header