import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from '../../axios';

export const fetchContacts = createAsyncThunk('/contacts/fetchContacts', async () => {
    const { data } = await axios.get('/contacts')
    return data;
})

export const fetchAddContact = createAsyncThunk('/contacts/fetchAddContact', async (params) => {
     return await axios.post('/contacts', params)

})

export const fetchRemoveContact = createAsyncThunk('/contacts/fetchRemoveContact', async (id) => {
    return await axios.delete(`/contacts/${id}`)

})
