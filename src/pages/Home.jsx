import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen bg-[url("/src/assets/images/projectman.jpeg")] bg-cover bg-center bg-no-repeat'>
            <div className='h-screen bg-gradient-to-r from-transparent  to-black w-3/4 float-right flex justify-center items-center'>
                <div className='text-white mb-20 ml-10 lg:ml-10 md:ml-10'>
                    <h1 className='text-4xl mb-5 text-blue-400 md:text-5xl lg:text-6xl'>
                        PROJECT-MAN
                    </h1>
                    <p className='text-l border-b-2 border-blue-400 w-fit pr-4 pl-1 md:text-xl'>
                        Work Smart & Efficient
                    </p>
                    <button
                        onClick={() => {
                            navigate('/login')
                        }}
                        className='mt-5 px-10 py-1 bg-blue-500 rounded-xl animate-bounce hover:bg-blue-700 duration-100 md:text-xl md:mt-10 lg'
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
