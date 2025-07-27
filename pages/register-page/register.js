import createNavbar from "../../createNavbar.js";
import supabase from "../../supabase.js";

createNavbar("..", document.getElementById("nav-ph"));

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const firstNameInput = document.getElementById("f-name");
const lastNameInput = document.getElementById("l-name");
const usernameInput = document.getElementById("username");

const btn = document.querySelector("button");

btn.onclick = () => buttonWa();
async function buttonWa() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const username = usernameInput.value.trim();

  //TODO: Error handle

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        username: username,
        birthdate: "2025-05-02",
        weight: 12,
        height: 13,
      },
    },
  });

  console.log(data);
  console.log(error);
}
