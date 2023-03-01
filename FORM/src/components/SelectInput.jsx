import { MenuItem, TextField } from "@mui/material";
import Loader from "../utils/loader";
const SelectInput = ({ name, label, options, handleChange, formData, handleBlur, isLoading }) => {
    return (
        <>
            <TextField
                select
                fullWidth
                label={label}
                size='small'
                name={name}
                value={formData[name].value}
                onChange={handleChange}
                error={formData[name].error}
                onBlur={handleBlur}
                helperText={formData[name].error && formData[name].errorMessage}
            >
                {isLoading ?(<Loader/>):(options.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                        {option.name}
                    </MenuItem>
                )))}
            </TextField>
        </>
    )
}

export default SelectInput