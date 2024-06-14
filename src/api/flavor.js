import { API_ADDRESS } from "./main";
const ICE_CREAM_API = `${API_ADDRESS}/flavor`;

async function getFlavor(id) {
  try {
    const response = await fetch(`${ICE_CREAM_API}/${id}`);
    const flavor = await response.json();
    return flavor;
  } catch (error) {
    console.error(error);
  }
}

async function getAllFlavors() {
  try {
    const response = await fetch(`${ICE_CREAM_API}/all`);
    const flavors = await response.json();
    return flavors;
  } catch (error) {
    console.error(error);
  }
}

export { getFlavor, getAllFlavors };
