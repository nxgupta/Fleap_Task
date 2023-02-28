import React from 'react'
import { TextField } from "@mui/material";
const TextInput = ({ name,label,type,handleChange,formData,handleBlur}) => {
    return (
        <>
            <TextField
                name={name}
                variant='outlined'
                fullWidth
                type={type}
                value={formData[name].value}
                label={label}
                onChange={handleChange}
                size='small'
                onBlur={handleBlur}
                error={formData[name].error}
                helperText={formData[name].error && formData[name].errorMessage} />
        </>

    )
}

export default TextInput