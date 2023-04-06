import React from 'react'
import BarLoader from 'react-spinners/BarLoader'

const Loader = ({ loading }) => {
    return (
        <section className='vh-100 w-100 d-flex justify-content-center align-items-center'>
            <BarLoader color="#a333a7" loading={loading} />
        </section>
    )
}

export default Loader