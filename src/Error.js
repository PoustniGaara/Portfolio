import React from 'react'

const Error = ({ setContentAnimation }) => {
    setContentAnimation(true);
    return (
        <div className='errorDiv'>
                <div className='row'>
                    <h1>Ooops</h1>
                    <p className='sFText'>The address that you are looking for does not exists.</p>
                    <p className='sFText'>Please, choose option from navigation menu.</p>
                </div>
        </div>
    )
}

export default Error