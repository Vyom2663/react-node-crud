import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/getuser`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const postUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/postuser`, userData);
    return response.data.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const putUser = async (id, userData) => {
  try {
    const response = await axios.post(`${API_URL}/putuser/${id}`, userData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteuser/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
