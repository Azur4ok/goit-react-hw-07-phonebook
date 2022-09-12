import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from '../../axios';

export const fetchContacts = createAsyncThunk('/contacts/fetchContacts', async () => {
    const { data } = await axios.get('/contacts')
    return data;
})

export const fetchAddContact = createAsyncThunk('/contacts/fetchAddContact', async (params) => {
    console.log(params);
     await axios.post('/contacts', params)

})
