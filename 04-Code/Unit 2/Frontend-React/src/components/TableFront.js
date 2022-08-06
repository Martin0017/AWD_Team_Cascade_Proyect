import React, { useEffect, useState } from 'react';
import '../index.css'
import './TableFront.css';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import axios from 'axios'

const baseUrl = 'http://localhost:3001/ChocoAndino/fauna/'

const TableFront = (props) => {

    const styles = useStyles();
    const [data, setData] = useState([]);
    const [modalInsert, setModalInsert] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [selectedFauna, setSelectedFauna] = useState({
        id: '',
        scientific_name: '',
        vulgar_name: '',
        description: '',
        date: '',
        type: '',
        url_image: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setSelectedFauna(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(selectedFauna);
    }

    const getRequest = async () => {
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
            })
    }

    const postRequest = async () => {
        await axios.post(baseUrl + 'add', selectedFauna)
            .then(response => {
                setData(data.concat(response.data))
                openCloseModalInsert()
            })
    }

    const putRequest = async () => {
        await axios.put(baseUrl + 'update/ ' + selectedFauna.id, selectedFauna)
            .then(response => {
                var newData = data;
                newData.map(fauna => {
                    if (selectedFauna.id === fauna.id) {
                        fauna.scientific_name = selectedFauna.scientific_name;
                        fauna.vulgar_name = selectedFauna.vulgar_name;
                        fauna.description = selectedFauna.description;
                        fauna.date = selectedFauna.date;
                        fauna.type = selectedFauna.type;
                        fauna.url_image = selectedFauna.url_image;
                    }
                })
                setData(newData);
                openCloseModalEdit();
            })
    }

    const deleteRequest = async () => {
        await axios.delete(baseUrl + 'delete/' + selectedFauna.id)
            .then(response => {
                setData(data.filter(fauna => fauna.id !== selectedFauna.id));
                openCloseModalDelete();
            })
    }

    const openCloseModalInsert = () => {
        setModalInsert(!modalInsert);
    }

    const openCloseModalEdit = () => {
        setModalEdit(!modalEdit);
    }

    const openCloseModalDelete = () => {
        setModalDelete(!modalDelete);
    }

    const selectFauna = (fauna, action) => {
        setSelectedFauna(fauna);
        (action === 'Editar') ? openCloseModalEdit() : openCloseModalDelete()
    }

    useEffect(async () => {
        await getRequest();
    }, [])

    const options = ["Ave", "Insecto", "Anfibio", "Animal", "Aracnido"];
    const inputLabel = React.useRef(null);
    const [labelWidth] = React.useState(0);

    const bodyInsert = (
        <div className={styles.modal}>
            <h3>Agregar Nuevo Registro de Fauna</h3>
            <br />
            <TextField name="id" type="text" className={styles.inputMaterial} label="ID" onChange={handleChange}
                value={selectedFauna && selectedFauna.id} readOnly />
            <br />
            <TextField name="scientific_name" className={styles.inputMaterial} label="Nombre Científico" onChange={handleChange} />
            <br />
            <TextField name="vulgar_name" className={styles.inputMaterial} label="Nombre común" onChange={handleChange} />
            <br />
            <TextField name="description" className={styles.inputMaterial} label="Descripción" onChange={handleChange} />
            <br /><br />
            <TextField name="date" type="date" className={styles.inputMaterial} onChange={handleChange} />
            <br /><br />
            <FormControl className={styles.inputMaterial}>
                <InputLabel ref={inputLabel}>Tipo</InputLabel>
                <Select
                    name="type"
                    onChange={handleChange}
                    labelWidth={labelWidth}
                >
                    {options.map(item => (
                        <MenuItem value={item}>{item} &nbsp;&nbsp;&nbsp;</MenuItem>
                    ))}

                </Select>
            </FormControl>
            {/* <TextField name="type" label="Tipo" className={styles.inputMaterial} onChange={handleChange} /> */}
            <TextField name="url_image" className={styles.inputMaterial} label="URL de la imagen" onChange={handleChange} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={() => postRequest()}>Insertar</Button>
                <Button onClick={() => openCloseModalInsert()}>Cancelar</Button>
            </div>
        </div>
    )

    const bodyEdit = (
        <div className={styles.modal}>
            <h3>Editar Fauna</h3>
            <br />
            <TextField name="scientific_name" className={styles.inputMaterial} label="Nombre Científico" onChange={handleChange} value={selectedFauna && selectedFauna.scientific_name} />
            <br />
            <TextField name="vulgar_name" className={styles.inputMaterial} label="Nombre común" onChange={handleChange} value={selectedFauna && selectedFauna.vulgar_name} />
            <br />
            <TextField name="description" className={styles.inputMaterial} label="Descripción" onChange={handleChange} value={selectedFauna && selectedFauna.description} />
            <br /><br />
            <TextField name="date" type="date" className={styles.inputMaterial} onChange={handleChange} value={selectedFauna && selectedFauna.date} />
            <br /><br />
            <FormControl className={styles.inputMaterial}>
                <InputLabel ref={inputLabel}>Tipo</InputLabel>
                <Select
                    name="type"
                    value={selectedFauna && selectedFauna.type}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                >
                    {options.map(item => (
                        <MenuItem value={item}>{item} &nbsp;&nbsp;&nbsp;</MenuItem>
                    ))}

                </Select>
            </FormControl>
            <br /><br />
            <TextField name="url_image" className={styles.inputMaterial} label="URL de la imagen" onChange={handleChange} value={selectedFauna && selectedFauna.url_image} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={() => putRequest()}>Editar</Button>
                <Button onClick={() => openCloseModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    const bodyDelete = (
        <div className={styles.modal}>
            <p>Estás seguro que deseas eliminar la el registro de fauna <b>{selectedFauna && selectedFauna.vulgar_name}</b> ? </p>
            <div align="right">
                <Button color="secondary" onClick={() => deleteRequest()} >Sí</Button>
                <Button onClick={() => openCloseModalDelete()}>No</Button>
            </div>
        </div>
    )

    return (
        <div className="App">
            <h2 id='repotitle'>Repositorio de Fauna Chocó Andino</h2>
            <br />
            <Button id='buttonInsert' onClick={() => openCloseModalInsert()}>Insertar</Button>
            <br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre científico</TableCell>
                            <TableCell>Nombre común</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Imagen</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map(fauna => (
                            <TableRow key={fauna.id}>
                                <TableCell>{fauna.id}</TableCell>
                                <TableCell>{fauna.scientific_name}</TableCell>
                                <TableCell>{fauna.vulgar_name}</TableCell>
                                <TableCell>{fauna.description}</TableCell>
                                <TableCell>{fauna.date}</TableCell>
                                <TableCell>{fauna.type}</TableCell>
                                <TableCell>{<img src={fauna.url_image} alt="Fauna" width="230px" height="230px"></img>} </TableCell>
                                <TableCell>
                                    <Edit className={styles.icons} onClick={() => selectFauna(fauna, 'Editar')} />
                                    &nbsp;&nbsp;&nbsp;
                                    <Delete className={styles.icons} onClick={() => selectFauna(fauna, 'Eliminar')} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={modalInsert}
                onClose={openCloseModalInsert}>
                {bodyInsert}
            </Modal>

            <Modal
                open={modalEdit}
                onClose={openCloseModalEdit}>
                {bodyEdit}
            </Modal>

            <Modal
                open={modalDelete}
                onClose={openCloseModalDelete}>
                {bodyDelete}
            </Modal>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    icons: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    }
}));

export default TableFront