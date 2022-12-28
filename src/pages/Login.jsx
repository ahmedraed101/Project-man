import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../firebase/firebase.js'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineLoading } from 'react-icons/ai'

const Login = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/projects')
        }
    }, [user, navigate])

    const handleGoogleLogin = async () => {
        const googleProvider = new GoogleAuthProvider()
        try {
            const user = await signInWithPopup(auth, googleProvider)
            if (user) {
                navigate('/projects')
            }
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div className='h-screen flex justify-center items-center bg-slate-300'>
            <div className='shadow-xl p-10 mb-20 bg-slate-50 rounded-md'>
                <h1 className='mb-5 text-blue-800 text-xl md:text-xl lg:text-2xl'>
                    Login / Signup
                </h1>
                {loading ? (
                    <AiOutlineLoading className='animate-spin mx-auto md:text-xl lg:text-2xl' />
                ) : (
                    <div
                        onClick={handleGoogleLogin}
                        className='mt-5 px-10 py-3 bg-black text-white rounded-xl cursor-pointer flex items-center select-none duration-100 hover:text-blue-400 hover:shadow-lg md:text-xl lg:text-2xl'
                    >
                        <p className='mr-5'>Sign with Google</p> <FcGoogle />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
