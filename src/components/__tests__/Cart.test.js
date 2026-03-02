import { render, screen, act, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../__mocks__/mockResMenu.json"
import "@testing-library/jest-dom"




global.fetch = jest.fn( () => 
Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}))

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

const accordionHeader = screen.getByText("Recommended (19)")
fireEvent.click(accordionHeader);

const categoryList = screen.getAllByTestId("foodItems")
expect(categoryList.length).toBe(19)

});
