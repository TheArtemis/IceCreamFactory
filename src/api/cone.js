import { API_ADDRESS } from "./main";
const ICE_CREAM_API = `${API_ADDRESS}/cone`;

async function getCone(id) {
  try {
    const response = await fetch(`${ICE_CREAM_API}/${id}`);
    const cone = await response.json();
    return cone;
  } catch (error) {
    console.error(error);
  }
}

async function getAllCones() {
  try {
    const response = await fetch(`${ICE_CREAM_API}/all`);
    console.log(response);
    const cone = await response.json();
    console.log(cone);
    return cone;
  } catch (error) {
    console.error(error);
  }
}

export { getCone, getAllCones };
