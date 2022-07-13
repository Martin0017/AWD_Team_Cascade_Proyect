import React from 'react';
import '../index.css'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Table = (props) => {
    const fauna = props.fauna

    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'scientific_name', headerName: 'Scientific Name', width: 200 },
        { field: 'vulgar_name', headerName: 'Vulgar Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 350 },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'url_image', headerName: 'Image', width: 300, renderCell: (params) => <img src={params.value} alt="Fauna" width="150px"/> }
    ]

    return (
        <Box
            sx={{
                width: '95%',
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
                boxShadow: '1px 1px 20px #333',
            }}
        >
            <h1>Fauna Repository</h1>
            <div style={{ height: 700, width: '100%' }} >
                <DataGrid
                    rows={
                        fauna.map(item => (
                            {
                                id: item.id,
                                scientific_name: item.scientific_name,
                                vulgar_name: item.vulgar_name,
                                description: item.description,
                                date: item.date,
                                url_image: item.url_image
                            }
                        ))
                    }
                    getRowHeight={() => 'auto'}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Box>
    );
}

export default Table