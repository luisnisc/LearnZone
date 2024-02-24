import axios from "axios";

export const pos = async (data) => {
  await axios.post("http://192.168.1.140:8000/clase/api/api/", data);
  window.location.reload();
};
export const posApunte = async (data) => {
  await axios.post("http://192.168.1.140:8000/clase/api/apunte/", data);
  
}

export const gt = () => {
  return axios.get("http://192.168.1.140:8000/clase/api/api/");
};
