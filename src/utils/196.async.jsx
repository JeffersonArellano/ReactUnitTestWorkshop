import { setTimeout } from "timers";

export const getDataCallback = (callback) => {
  const name = "Lupe";

  setTimeout(() => {
    callback(name);
  }, 2000);
};

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Lupita");
    }, 300);
  });
};

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 300);
  });
};

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

//{then, catch}
// getDataPromise()
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
