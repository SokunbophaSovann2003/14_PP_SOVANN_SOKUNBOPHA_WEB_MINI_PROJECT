export const loginService = async (userInfo) => {
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log("Data : ", data);
  return data;
};

export const registerService = async (userInfo) => {
  try {
    console.log("this is my request", userInfo);
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );

    const data = await res.json();
    console.log("Data : ", data);
    return data;
  } catch (err) {
    console.log("error in register service :", err);
  }
};
