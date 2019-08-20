import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    TextField
} from '@material-ui/core'


export const AddFavor = props => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [datePosted, setDate] = useState(Date.now())

    function handleSubmit() {
        console.log('submit')
    }

    function handleTitle(e) {
        const val = e.target.value
        setTitle(val)
    }

    return (
        <form onSubmit={handleSubmit}>

            <TextField
            hintText="Username"
            floatingLabelText="Username"
            onChange={handleTitle}
            /> <br/>
        </form>
    )
}

export default AddFavor