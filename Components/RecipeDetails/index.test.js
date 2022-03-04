import RecipeDetails from '.'
import {screen, render} from '../../test/test-utils'

const data = {
    image: "https://tinypng.com/images/example-shrunk.png",
    totalDaily: {
        ENERC_KCAL: 12.5
    },
    healthLabels: ["vegetarian"],
    ingredients: ["potato", "tomato"],
    url: "https://bbc.co.uk"
}

describe("test of RecipeDetails component", () => {
    test('renders headings for each section', () => {
        render(<RecipeDetails data={data}/>);
        expect(screen.getByText("Nutrition")).toBeInTheDocument();
        expect(screen.getByText("Ingredients")).toBeInTheDocument();
        expect(screen.getByText("Preparation")).toBeInTheDocument();
    })
})