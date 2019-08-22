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

    function handleDescription(e) {
        const val = e.target.value
        setDescription(val)
    }

    return (
        <form onSubmit={handleSubmit}>

            <TextField
            hintText="Title"
            floatingLabelText="Title"
            onChange={handleTitle}
            /> <br/>
            <TextField
            hintText="Description"
            floatingLabelText="Description"
            onChange={handleDescription}
            /> <br/>
        </form>
    )
}

export default AddFavor