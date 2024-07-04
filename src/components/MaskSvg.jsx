import React from 'react'

const MaskSvg = (props) => {
    return (
        <div
            className={props.className}
            style={{
                WebkitMask: `url('${props.url}') no-repeat center / contain`,
                mask: `url('${props.url}') no-repeat center / contain`,
                backgroundColor: `${props.color || 'black'}`
            }}
        />
    )
}

export default MaskSvg
