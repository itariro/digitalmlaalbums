import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionAlbum from "../components/SectionAlbum";
export default function App() {
  return (
    <>
      <Header />
      <SectionAlbum />
      <Footer />
    </>
  );
}

App.propTypes = {
  searchFilter: PropTypes.string,
};
