import { Avatar } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[12vh] border-b-2 shadow-sm px-8 items-center">
        <div className="space-x-4 flex">
          <img src="./icon.png" className="w-8 h-8" alt="" />
          <h1 className="text-3xl font-bold">CubeDox</h1>
        </div>
        <div>
          <Avatar
            className="h-12 w-12 bg-yellow-200"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          />
        </div>
    </nav>
  )
}

export default Navbar