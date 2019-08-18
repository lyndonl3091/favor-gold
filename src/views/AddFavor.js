import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddFavor = props => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [datePosted, setDate] = useState(Date.now())

    return (
        <div>Add Favor</div>
    )
}

export default AddFavor