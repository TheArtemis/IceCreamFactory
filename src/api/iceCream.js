import { API_ADDRESS } from "./main";
const ICE_CREAM_API = `${API_ADDRESS}/iceCream`;

async function getIceCream(id) {
  try {
    const response = await fetch(`${ICE_CREAM_API}/${id}`);
    const iceCream = await response.json();
    return iceCream;
  } catch (error) {
    console.error(error);
  }
}

async function getAllIceCreams() {
  try {
    const response = await fetch(`${ICE_CREAM_API}/all`);
    const iceCreams = await response.json();
    return iceCreams;
  } catch (error) {
    console.error(error);
  }
}

export { getIceCream, getAllIceCreams };
