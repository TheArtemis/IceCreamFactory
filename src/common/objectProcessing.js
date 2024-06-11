function toToken(objetcs, tokenType) {
  if (
    tokenType !== "flavor" &&
    tokenType !== "cone" &&
    tokenType !== "topping"
  ) {
    console.log("Invalid type for " + objetcs + " type: " + tokenType);
    return null;
  }

  if (Array.isArray(objetcs)) {
    return objetcs.map((obj) => {
      return { id: obj.id, name: obj.name, type: tokenType };
    });
  }

  return [{ id: objetcs.id, name: objetcs.name, type: tokenType }];
}

function toSingleTokenList(flavors, cones, toppings) {
  /* console.log("flavors: ", flavors);
  console.log("cones: ", cones);
  console.log("toppings: ", toppings); */
  return [
    ...toToken(flavors, "flavor"),
    ...toToken(cones, "cone"),
    ...toToken(toppings, "topping"),
  ];
}

export { toToken, toSingleTokenList };
