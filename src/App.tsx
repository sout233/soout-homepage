import './App.css'
import PixelBlast from './PixelBlast'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <div className="absolute h-screen w-screen bg-black z-0">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#E9FFAC"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0.1}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.02}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0}
            transparent
          />
        </div>

        <div className='flex flex-col z-10 items-center justify-center h-screen pointer-events-none'>
          <div className='w-72 md:w-100 lg:w-111 bg-black/50 backdrop-blur-2xl justify-between'>
            <div className='flex flex-row justify-between w-full'>
              <h1 className='text-5xl font-bold items-center justify-center text-[#E9FFAC] w-auto'>SOUT</h1>
              <h1 className='text-3xl font-bold items-center justify-center text-[#E9FFAC] w-auto'>+</h1>
            </div>
            <h1 className='text-xl font-bold items-center justify-center text-[#E9FFAC]/80'>MAIN HOMEPAGE</h1>
            <div className='flex flex-row mt-1 pointer-events-auto justify-end'>
              <a href='https://blog.soout.top' className='btn btn-sm rounded-4xl bg-transparent border-2 border-[#E9FFAC] text-[#E9FFAC] hover:bg-[#E9FFAC] hover:text-black'>BLOG</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
