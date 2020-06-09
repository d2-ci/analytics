import React from 'react'
import PropTypes from 'prop-types'

const MoreHorizontalIcon = ({ style }) => {
    return (
        <svg
            style={{
                ...style,
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    )
}

MoreHorizontalIcon.propTypes = {
    style: PropTypes.array,
}

export default MoreHorizontalIcon
