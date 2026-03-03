import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../__mocks__/mockResMenu.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);


it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );

  const accordionHeader = screen.getByText("Recommended (19)");
  fireEvent.click(accordionHeader);

  const categoryList = screen.getAllByTestId("foodItems");
  expect(categoryList.length).toBe(19);
});

it("Should load restaurant menu with Add + button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const accordionHeader = screen.getByText("Recommended (19)");
  fireEvent.click(accordionHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  const cartOne = screen.getByText("Cart - [1]");
  expect(cartOne).toBeInTheDocument();
});

it("Should load the Cart component with added items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const accordionHeader = screen.getByText("Recommended (19)");
  fireEvent.click(accordionHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  const cartItems = screen.getAllByTestId("foodItems");
  expect(cartItems.length).toBe(21);
});
