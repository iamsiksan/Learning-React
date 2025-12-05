import React from 'react'

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-full bg-white rounded-xl shadow-lg p-6 text-center">
      <div className="shadow-lg rounded-xl overflow-hidden mb-3">

      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBvNnBmZXFiMGx0bjJlZHY0N3d3cnRha3E3Y20xdngyd2F1MWsxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif"
        alt="Under Construction"
        className="h-50 w-80 "
      />
      </div>
      <h2 className="text-2xl font-bold mb-2">Page Under Construction</h2>
      <p className="text-gray-500">
        We're working hard to bring this page to you soon!
      </p>
    </div>
  )
}

export default About