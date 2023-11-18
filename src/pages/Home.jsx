import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-1 flex items-center justify-center'>
        Popup
      </div> */}

      {/* this will act as the canvas for our 3d modules */}
      <Canvas className='w-full h-screen bg-transparent' camera={{near:0.1, far:1000}}>
        {/* this will show the loader while the animation is loading */}
        <Suspense fallback={<Loader />}>

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home