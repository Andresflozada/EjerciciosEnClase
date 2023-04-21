import React, {memo} from 'react'

export const Small = memo(
    ({value}) => {
        console.log(':(')
        return (
            <Small> { value} </Small>
        )
    }
)