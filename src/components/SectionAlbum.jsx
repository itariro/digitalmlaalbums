import List from "./List";
import Urls from "../store/Urls";

export default function SectionAlbum() {
  const { AlbumCollection } = Urls();
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <List url={AlbumCollection} />
      </div>
    </main>
  );
}
