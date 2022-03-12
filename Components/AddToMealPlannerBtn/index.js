import css from "./styles.module.css";

function AddToMealPlannerBtn({ setData, image, label, url, currentData }) {
  let randomID = Math.floor(
    Math.random() * Math.floor(Math.random() * Date.now())
  );
  const handlePost = () => {
    setData([
      ...currentData,
      {
        id: randomID,
        recipeName: label,
        recipeImage: image,
        linkToInstructions: url,
      },
    ]);
  };

  return (
    <button onClick={handlePost} className={css.btn}>
      Add To Meal Planner
    </button>
  );
}

export default AddToMealPlannerBtn;
