import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";
import { useUser } from "@auth0/nextjs-auth0";

export async function getServerSideProps(context) {
  const [
    MondayRes,
    TuesdayRes,
    WednesdayRes,
    ThursdayRes,
    FridayRes,
    SaturdayRes,
    SundayRes,
  ] = await Promise.all([
    fetch("http://localhost:3010/day/Monday"),
    fetch("http://localhost:3010/day/Tuesday"),
    fetch("http://localhost:3010/day/Wednesday"),
    fetch("http://localhost:3010/day/Thursday"),
    fetch("http://localhost:3010/day/Friday"),
    fetch("http://localhost:3010/day/Saturday"),
    fetch("http://localhost:3010/day/Sunday"),
  ]);
  const [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday] =
    await Promise.all([
      MondayRes.json(),
      TuesdayRes.json(),
      WednesdayRes.json(),
      ThursdayRes.json(),
      FridayRes.json(),
      SaturdayRes.json(),
      SundayRes.json(),
    ]);

  return {
    props: {
      Monday: Monday.Monday,
      Tuesday: Tuesday.Tuesday,
      Wednesday: Wednesday.Wednesday,
      Thursday: Thursday.Thursday,
      Friday: Friday.Friday,
      Saturday: Saturday.Saturday,
      Sunday: Sunday.Sunday,
    },
  };
}

function MealPlanner({
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const email = user.email;
  return (
    <>
      <NavBar />
      <MealPlannerCard
        Monday={Monday}
        Tuesday={Tuesday}
        Wednesday={Wednesday}
        Thursday={Thursday}
        Friday={Friday}
        Saturday={Saturday}
        Sunday={Sunday}
        email={email}
      />
    </>
  );
}

export default MealPlanner;
