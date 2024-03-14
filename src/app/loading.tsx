'use client'

import { Triangle } from "react-loader-spinner"

const Loading = () => (
    <div className="h-[100vh] bg-[#001e3c] flex justify-center items-center">
        <Triangle
            visible={true}
            height="80"
            width="80"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
)

export default Loading;