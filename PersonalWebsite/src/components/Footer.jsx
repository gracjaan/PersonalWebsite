import React from 'react'

const Footer = () => {
  return (
    <footer className="px-10 lg:px-20 2xl:px-40 bg-primary">
        <div className="flex flex-row my-10 gap-10">
            <button>
                <h4 className="text-white text-lg font-normal">Linkedin</h4>
            </button>
            <button>
                <h4 className="text-white text-lg font-normal">Twitter</h4>
            </button>
            <button>
                <h4 className="text-white text-lg font-normal">GitHub</h4>
            </button>
        </div>
        <div className="text-white text-lg font-normal py-5">Copyright © 2023 Michał Chudziak. All rights reserved. hello@michalchudziak.dev.</div>
    </footer>
  )
}

export default Footer