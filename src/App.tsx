import {motion} from 'framer-motion'

function App() {
  return (
    <div className="flex justify-center items-center width-screen h-screen">
      <motion.div whileHover={{scale: 1.3}}>
          <h1 className="text-xl">⚠️ on maintenance ⚠️</h1>
      </motion.div>
    </div>
  )
}

export default App
