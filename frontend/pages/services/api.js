import delve from "dlv";

// This functionn can merge required data but it is not used here.
export async function checkRequiredData(block) {
  return block;
}

// This function will get the data dependencies for every blocks.
export async function getDataDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}