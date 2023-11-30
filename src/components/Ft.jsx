import axios from "axios";
import Swal from "sweetalert2";
// export const Createe = (data) => axios.post('http://localhost:8000/clase/api/api​/',data)
export const pos = async (data) => {
  await axios.post("http://192.168.7.151:8000/clase/api/api/", data);
  window.location.reload();
};

export const gt = () => {
  return axios.get("http://192.168.7.151:8000/clase/api/api/");
};
