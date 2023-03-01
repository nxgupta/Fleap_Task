import { Button, Grid, Paper, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SelectInput from '../components/SelectInput'
import TextInput from '../components/TextInput'
import Loader from '../utils/loader';
const Form = ({ setDisplayData, isLoading, setIsLoading }) => {
    let [countryData, setCountryData] = useState([])
    useEffect(() => {
        setIsLoading(true)
        let fetch=async ()=>{
            try{
                let res=await axios.get('https://laravel-world.com/api/countries')
                setTimeout(()=>{setIsLoading(false)},1000)
                setCountryData(res.data.data)
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetch();
    },[])

    //to Navigate to display page
    const navigate = useNavigate();

    //initial form value
    let initialFormValues = {
        name: { value: '', error: false, errorMessage: 'You must enter your Name' },
        email: { value: '', error: false, errorMessage: 'You must enter your Email' },
        phone: { value: '', error: false, errorMessage: 'You must enter your 10 digit Phone number' },
        country: { value: '', error: false, errorMessage: 'You must choose your country' },
    }
    let [formData, setFormData] = useState(initialFormValues)
    //form submit function
    function handleSubmit(event) {
        event.preventDefault();
        if (validator()) {
            setIsLoading(true)
            setDisplayData(prevDisplayData => [...prevDisplayData, formData])
            setFormData(initialFormValues)
            setTimeout(()=>{setIsLoading(false)},1000)
            navigate('/display')
        }
    }

    //finalValidator (onSubmission)

    function validator() {
        let valid = true;
        for (let item in formData) {
            if (formData[item].value === '' || formData[item].error === true) {
                setFormData(prevFormData => ({ ...prevFormData, [item]: { ...prevFormData[item], error: true } }))
                valid = false
            }
        }
        return valid
    }

    //function for focusin focusout
    function handleBlur(event) {
        const { name, value } = event.target
        switch (name) {
            case 'name': {
                if (value === '') {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true } })
                }
                else if (value.length < 3) {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true, errorMessage: 'Name must be at least 3 characters long' } })
                }
                else {
                    setFormData({ ...formData, [name]: { ...formData[name], error: false } })
                }
            }
                break;
            case 'email': {
                let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (value === '') {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true } })
                }
                else if (!regex.test(value)) {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true, errorMessage: 'Please enter a Valid email' } })
                }
                else {
                    setFormData({ ...formData, [name]: { ...formData[name], error: false } })
                }
            }
                break;
            case 'phone': {
                if (value === '') {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true } })
                }
                else if (value.length < 10) {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true, errorMessage: 'Please enter a valid phone number' } })
                }
                else {
                    setFormData({ ...formData, [name]: { ...formData[name], error: false } })
                }
            }
                break;
            case 'country': {
                if (value === '') {
                    setFormData({ ...formData, [name]: { ...formData[name], error: true } })
                }
                else {
                    setFormData({ ...formData, [name]: { ...formData[name], error: false } })
                }
            }
                break;
            default:
                break;
        }
    }

    //function for handling change
    function handleChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: { ...formData[name], value } })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Paper component={Box} p={2}>
                <Box mb={2} textAlign='center'>
                    <b>Please Fill Personal Data</b>
                </Box>
                <Grid container spacing={1} marginBottom='16px' >
                    <Grid item xs={12} sm={6}>
                        <TextInput label="Name" name='name' formData={formData} handleBlur={handleBlur} type='text' handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput label="Email" name='email' formData={formData} handleBlur={handleBlur} type='email' handleChange={handleChange} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} marginBottom='16px'>
                    <Grid item xs={12} sm={6}>
                        <TextInput label="Phone number" name='phone' formData={formData} handleBlur={handleBlur} type='tel' handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectInput isLoading={isLoading} label="Country" name='country' formData={formData} handleBlur={handleBlur} handleChange={handleChange} options={countryData} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent='flex-end' >
                    <Grid item >
                        <Button variant="outlined" type='submit'>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>)
}
export default Form