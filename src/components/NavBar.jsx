import { useState, useEffect } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../firebase/firebase.js'
import { AiOutlineLoading } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { HiOutlineViewList } from 'react-icons/hi'

const NavBar = () => {
    const [user, loading] = useAuthState(auth)
    const [userInfoVisible, setUserInfoVisibility] = useState(false)
    const [NavmenueVisible, setNavmenueVisibility] = useState(false)
    const navigate = useNavigate()

    const toggleMenues = (info = false) => {
        if (info) {
            console.log(info)
            setUserInfoVisibility((prev) => !prev)
            setNavmenueVisibility(false)
            return
        }
        setUserInfoVisibility(false)
        setNavmenueVisibility((prev) => !prev)
    }
    const handleSignOut = () => {
        auth.signOut()
        navigate('/login')
    }

    useEffect(() => {
        if (!user) navigate('/login')
    }, [user, navigate])

    return (
        <>
            <div className='absolute bottom-0 w-screen'>
                <div className='flex justify-between items-center max-w-xl rounded-xl ml-auto mr-auto px-4 py-2 bg-slate-300'>
                    <div className='text-3xl  relative'>
                        <HiOutlineViewList
                            onClick={() => toggleMenues(false)}
                            className='hover:text-cyan-500 duration-200 cursor-pointer'
                        />
                        {/* NavMenue */}
                        {NavmenueVisible && (
                            <div className='absolute -top-80 bg-slate-600 p-5 w-52 h-80 overflow-auto rounded-xl'>
                                <ul className='text-md text-white'>
                                    <li>
                                        <Link
                                            to='/projects'
                                            className='hover:text-cyan-400 duration-200'
                                        >
                                            All Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/projects/1'>project 1</Link>
                                    </li>
                                    <li>
                                        <Link to='/projects/2'>project 2</Link>
                                    </li>
                                    <li>
                                        <Link to='/projects/3'>project 3</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {/* end of NavMenue */}
                    </div>
                    <Link to='/projects/new'>
                        <div className='px-3 py-3 rounded-full text-white border-2 border-cyan-400 hover:bg-cyan-400 duration-150 cursor-pointer'>
                            <GrFormAdd className='text-red-600 text-2xl hover:scale-110' />
                        </div>
                    </Link>
                    <div
                        onClick={() => toggleMenues(true)}
                        className='rounded-full w-10 cursor-pointer relative'
                    >
                        {loading ? (
                            <AiOutlineLoading className='animate-spin' />
                        ) : (
                            <img src={user.photoURL} alt={user.displayName} />
                        )}
                        {/* username & signout */}
                        {userInfoVisible && (
                            <div className='absolute -top-32 bg-slate-600 text-white px-10 py-5 right-2 rounded-xl'>
                                <h3 className='text-sm '>{user.displayName}</h3>
                                <button
                                    onClick={handleSignOut}
                                    className='border-2 border-red-500 mt-3 px-3 pb-1 rounded-xl duration-150 hover:bg-red-500'
                                >
                                    signout
                                </button>
                            </div>
                        )}
                        {/* end username & signout */}
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default NavBar
