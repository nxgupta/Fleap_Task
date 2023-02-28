import { MenuItem, TextField } from "@mui/material";
const SelectInput = ({ name,label,options,handleChange,formData,handleBlur}) => {
    return (
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
                {options.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                    {option.key}
                </MenuItem>
            ))}
            </TextField>
    )
}

export default SelectInput