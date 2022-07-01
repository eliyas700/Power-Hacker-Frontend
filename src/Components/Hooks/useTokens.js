import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user, "from token");
  !user && localStorage.removeItem("accessToken");
  useEffect(() => {
    const email = user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://arrogant-inukshuk-10910.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user, token]);
  return [token];
};
export default useToken;
