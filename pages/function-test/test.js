import createNavbar from "../../createNavbar.js";
import supabase from "../../supabase.js";

createNavbar("..", document.getElementById("nav-ph"));

let userID;

init();
async function init() {
  const { data, error } = await supabase.auth.getSession();
  //console.log(data);
  console.log(error);
  userID = data.session.user.id;
}

function getGoalType() {
  const a = document.getElementById("goal-type");
  return parseInt(a.value);
}

//#region Get Goals
const getBtn0 = document.getElementById("get");

getBtn0.onclick = () => getGoal();
async function getGoal() {
  console.log("Starting GET-GOAL");
  const { data, error } = await supabase
    .from("goals")
    .select()
    .eq("user_id", userID)
    .eq("goal_type_id", getGoalType());

  console.log(data);
  console.log(error);
}

//#endregion

//#region Create new Goals
const dateInp1 = document.getElementById("date-input");
const numInp1 = document.getElementById("num-input");
const createBtn1 = document.getElementById("create-1");

createBtn1.onclick = () => createGoal();
async function createGoal() {
  console.log("STARTING CREATE GOAL");

  const num = parseInt(numInp1.value);
  if (Number.isNaN(num)) return;

  //Calls a custom SQL function I set up in Supabase
  const { error } = await supabase.rpc("create_goal_dev0", {
    goal_type: getGoalType(),
    goal_value: num,
    start_date: dateInp1.value,
  });

  console.log(error);
}
//#endregion

//#region Change Goal's Date
const numInp2 = document.getElementById("num-input-2");
const dateInp2 = document.getElementById("date-input-2");
const updateBtn2 = document.getElementById("update-2");

updateBtn2.onclick = () => changeGoalDate();
async function changeGoalDate() {
  console.log("STARTING CHANGE GOAL DATE");

  const num = numInp2.value;
  const date = dateInp2.value;

  const { error } = await supabase.rpc("change_goal_date", {
    goal_id_arg: num,
    start_date: date,
  });

  console.log(error);
}
//#endregion

//#region Get Daily Activities
const numInp3 = document.getElementById("num-input-3");
const getBtn3 = document.getElementById("get-3");

getBtn3.onclick = () => getDaily();
async function getDaily() {
  console.log("Starting GET-DAILY");
  const { data, error } = await supabase
    .from("daily_activities")
    .select()
    .eq("goal_id", numInp3.value);

  console.log(data);
  console.log(error);
}

//#endregion

//#region Change Value of Daily Activity
const numInp4 = document.getElementById("num-input-4");
const dateInp4 = document.getElementById("date-input-4");
const updateBtn4 = document.getElementById("update-4");

updateBtn4.onclick = () => changeDaily();
async function changeDaily() {
  console.log("Starting CHANGE-DAILY");

  const { error } = await supabase
    .from("daily_activities")
    .update({ value: numInp4.value })
    .eq("date", dateInp4.value);

  console.log(error);
}
//#endregion
