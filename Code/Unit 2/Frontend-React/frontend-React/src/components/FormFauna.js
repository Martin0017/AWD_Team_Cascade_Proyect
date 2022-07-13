import React from 'react'
import '../index.css' 
import { Box, TextField } from '@mui/material';

const FormFauna = (props) => {
    const { formFauna, setFormFauna } = props

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFauna({ ...formFauna, [name]: value })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefaul()//
    // }

    return (
        <form>
            <Box
                sx={{
                    width: '50%',
                    height: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    background: '#fff',
                    borderRadius: '15px',
                    boxShadow: '1px 1px 20px #333'
                }}
            >
                <TextField fullWidth
                    name='id'
                    id='id'
                    value={formFauna.name}
                    onChange={handleChange}
                    placeholder='Search by id: '
                    label='id'
                />
            </Box>
        </form>
    );
}

export default FormFauna;