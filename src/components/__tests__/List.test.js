import { render, cleanup, screen, waitForElement } from '@testing-library/react';
import List from "../List";
import Urls from "../../store/Urls";

afterEach(cleanup);

test("List - if it's rendering correctly", () => {
  const { AlbumCollection } = Urls();
  render(<List url={AlbumCollection} />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});