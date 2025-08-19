import React from 'react'
import { Fieldx } from '../../assets/styling/style'

function FieldSingleTitle({ Title }) {
    return (
        <div className='inputContainer'>
            <div className='inputText'>{Title}</div>
            <Fieldx size='small' fullWidth id="outlined-basic" variant="outlined" />
        </div>
    )
}

export default FieldSingleTitle
