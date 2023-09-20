import React from 'react'

const Performance = () => {
  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40 flex flex-1 flex-col 2xl:flex-row gap-10 2xl:gap-0">
        <div className="flex flex-row flex-1 flex-wrap gap-10">
            <div className="flex flex-col flex-1 justify-center items-center min-w-[360px]">
                <h6>5</h6>
                <span>years of coding</span>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center min-w-[360px]">
                <h6>4.7</h6>
                <span>average app store rating</span>
            </div>
        </div>
        <div className="flex flex-row flex-1 flex-wrap gap-10">
            <div className="flex flex-col flex-1 justify-center items-center min-w-[360px]">
                <h6>2</h6>
                <span>businesses developed</span>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center min-w-[360px]">
                <h6>2k+</h6>
                <span>GitHub contributions</span>
            </div>
        </div>
    </section>
  )
}

export default Performance