import { useEffect } from "react";
import { getPerson } from "./getPerson";

export function PersonScore() {
  useEffect(() => {
    getPerson().then((person) => console.log(person));
    // async function getThePerson() {
    //   const person = await getPerson();
    //   console.log(person);
    // }
    // getThePerson();
  }, []);

  return null;
}
