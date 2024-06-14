import { API_ADDRESS } from "./main";
const ICE_CREAM_API = `${API_ADDRESS}/topping`;

async function getTopping(id) {
  try {
    const response = await fetch(`${ICE_CREAM_API}/${id}`);
    const topping = await response.json();
    return topping;
  } catch (error) {
    console.error(error);
  }
}

async function getAllToppings() {
  try {
    const response = await fetch(`${ICE_CREAM_API}/all`);
    const toppings = await response.json();
    return toppings;
  } catch (error) {
    console.error(error);
  }
}

export { getTopping, getAllToppings };
