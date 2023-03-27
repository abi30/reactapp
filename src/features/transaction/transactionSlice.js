import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getTransactions,addTransaction, editTransaction, deleteTransaction} from "./transcactionAPI";
const initialState ={
    transactions:[],
    isLoading:false,
    isError:false,
    error:''
};

// async thunks function
export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",async () => {
    const transactions = await getTransactions();
    return transactions;
});
export const createTransaction = createAsyncThunk(
    "transaction/createTransaction",async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
});
export const changeTransaction = createAsyncThunk(
    "transaction/changeTransaction",async ({id,data}) => {
    const transaction = await editTransaction(id,data);
    return transaction;
});
export const removeTransaction = createAsyncThunk(
    "transaction/removeTransaction",async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
});

//create transaction fucntion
const transactionSlice = createSlice({});