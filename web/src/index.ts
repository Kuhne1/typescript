import { localhost } from "../config";
import { User } from "./models/User";
const url = localhost + "users";
const nick = {
    id: 1,
    //name: "Better nick",
    //age: 2
};


const collection = User.buildUserCollecton();

collection.on("change", () => {
    console.log(collection);
})

collection.fetch();