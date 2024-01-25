import { useState } from "react"

type Props = {
    height ?: string
}

function ProgressBar({ height}: Props) {
  const [change, setChange] = useState(false)
  return (
    <main className='h-full'>
      <div className="flex flex-col items-center space-y-0">
        <div className={`w-3 h-3 ${change ? 'bg-blue-500' : 'bg-slate-300'} transition  rounded-full `} />
        <div className={`w-1 ${height} transition  ${change ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-slate-300'}`} />
        <div className={`w-3 h-3 ${change ? 'bg-green-500' : 'bg-slate-300'} transition  rounded-full `} />
      </div>
    </main>
  )

}

export default ProgressBar