// import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../firebase/firebase.js'
import { AiOutlineLoading } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { HiOutlineViewList } from 'react-icons/hi'

const NavBar = () => {
    const [user, loading] = useAuthState(auth)

    const handleSignOut = () => {}

    return (
        <>
            <div className='absolute bottom-0 w-screen'>
                <div className='flex justify-between items-center max-w-xl rounded-xl ml-auto mr-auto px-4 py-2 bg-slate-300'>
                    <div className='text-3xl hover:text-blue-500 duration-200 cursor-pointer'>
                        <HiOutlineViewList />
                    </div>
                    <Link to='/projects/new'>
                        <div className='px-3 py-3 rounded-full text-white border-2 border-blue-400 hover:bg-blue-400 duration-150 cursor-pointer'>
                            <GrFormAdd className='text-red-600 text-2xl hover:scale-110' />
                        </div>
                    </Link>
                    <div className='rounded-full w-10 cursor-pointer relative'>
                        {loading ? (
                            <AiOutlineLoading className='animate-spin' />
                        ) : (
                            <img src={user.photoURL} alt={user.displayName} />
                        )}
                        {/* username & signout */}
                        <div className='absolute -top-32 bg-slate-600 text-white px-10 py-5 right-2 rounded-xl'>
                            <h3 className='text-sm '>{user.displayName}</h3>
                            <button
                                onClick={handleSignOut}
                                className='border-2 border-red-500 mt-3 px-3 pb-1 rounded-xl duration-150 hover:bg-red-500'
                            >
                                signout
                            </button>
                        </div>
                        {/* end username & signout */}
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default NavBar
