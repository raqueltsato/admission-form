/* eslint-disable no-undef */
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

jest.mock("./src/core/config/constants", () => ({
  API_URL: "http://localhost:3000",
}));
