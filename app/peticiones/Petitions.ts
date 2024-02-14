import axios, { AxiosResponse } from "axios";

const baseUrl = "http://192.168.18.5:8083";

export const fetchFilm = async (ruta: string): Promise<any> => {
  const url = `${baseUrl}/${ruta}`;
  const response: AxiosResponse = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const saveFilm = async (ruta: string, form: any): Promise<any> => {
  const url = `${baseUrl}/${ruta}`;
  console.log(url);
  try {
    const response: AxiosResponse = await axios.post(url, form);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateFilm = async (updatedData: any): Promise<any> => {
  const url = `${baseUrl}/film/put`;
  try {
    const response: AxiosResponse = await axios.put(url, updatedData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al actualizar la película: " + error.message);
  }
};

export const fetchScenesByFilmId = async (filmId: number): Promise<any> => {
  const url = `${baseUrl}/scenes?filmId=${filmId}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener escenas de la película ${filmId}:`, error);
    throw error;
  }
};

export const fetchAllScenes = async (): Promise<any> => {
  const url = `${baseUrl}/scenes`;
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all scenes:", error);
    throw error;
  }
};

export const saveCharacter = async (form: any): Promise<any> => {
  const url = `${baseUrl}/characters`;

  try {
    const response: AxiosResponse = await axios.post(url, form);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving character:", error);
    throw error;
  }
};

export const deleteCharacter = async (id: number): Promise<string> => {
  const url = `${baseUrl}/characters/delete/${id}`;

  try {
    const response: AxiosResponse = await axios.delete(url);
    console.log(response.data);
    return "Deleted Successfully";
  } catch (error) {
    console.error("Error deleting character:", error);
    throw error;
  }
};

export const updateCharacter = async (id: number, updatedData: any): Promise<any> => {
  const url = `${baseUrl}/characters/put`;

  try {
    const response: AxiosResponse = await axios.put(url, updatedData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating character:", error);
    throw new Error("Error updating character: " + error.message);
  }
};

export const fetchCharacters = async (ruta: string): Promise<any> => {
  const url = `${baseUrl}/${ruta}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const deleteFilm = async (id: number): Promise<string> => {
  const url = `${baseUrl}/characters/delete/${id}`;

  try {
    const response: AxiosResponse = await axios.delete(url);
    console.log(response.data);
    return "Deleted Successfully";
  } catch (error) {
    console.error("Error deleting film:", error);
    throw error;
  }
};

export const fetchScene = async (ruta: string): Promise<any> => {
  const url = `${baseUrl}/${ruta}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching scene:", error);
    throw error;
  }
};

export const saveScene = async (form: any): Promise<any> => {
  const url = `${baseUrl}/scene`;

  try {
    const response: AxiosResponse = await axios.post(url, form);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving scene:", error);
    throw error;
  }
};

export const deleteScene = async (id: number): Promise<string> => {
  const url = `${baseUrl}/characters/scene/${id}`;

  try {
    const response: AxiosResponse = await axios.delete(url);
    console.log(response.data);
    return "Deleted Successfully";
  } catch (error) {
    console.error("Error deleting scene:", error);
    throw error;
  }
};
