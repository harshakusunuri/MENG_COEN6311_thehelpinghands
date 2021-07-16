import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <span><Spinner animation="border" role='status' style={{
            height: '100px',
            width: '100px',
            margin: 'auto',
            display: 'block'

        }}>

        </Spinner><span style={{

            width: '100px',
            margin: 'AUTO',
            display: 'block'

        }}  >Loading...</span></span>
    )
}

export default Loader
