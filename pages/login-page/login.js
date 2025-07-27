import createNavbar from "../../createNavbar.js";
import supabase from "../../supabase.js";

createNavbar("..", document.getElementById("nav-ph"));

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btn = document.querySelector("button");

btn.onclick = () => buttonWa();
async function buttonWa() {
  console.log("M");
  await signInWithEmail();
}

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  });
  console.log(data);
  console.log(error);
}
