import { setTimeout } from "timers";

export const getDataCallback = (callback) => {
  const name = "Lupe";

  setTimeout(() => {
    callback(name);
  }, 2000);
};
