import { Grid } from "@mui/material"
const DisplayData = ({ name, email, phone, country }) => {
    return (<div
        className="displayData"
    >
        <hr />
        <Grid container >
            <Grid item xs={4}>
                Name
            </Grid>
            <Grid item xs={8}>
                {name}
            </Grid>
        </Grid>
        <Grid container >
            <Grid item xs={4}>
                Email
            </Grid>
            <Grid item xs={8}>
                {email}
            </Grid>
        </Grid >
        <Grid container >
            <Grid item xs={4}>
                Phone
            </Grid>
            <Grid item xs={8}>
                {phone}
            </Grid>
        </Grid >
        <Grid container >
            <Grid item xs={4}>
                Country
            </Grid>
            <Grid item xs={8}>
                {country}
            </Grid>
        </Grid >
        <hr />
    </div>
    )
}
export default DisplayData