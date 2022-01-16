import { useState, useReducer, createContext } from "react";
import ApiGetRequestGeneric from "../hooks/ApiGetRequestGeneric";

import Card from "./Card";
import Modal from "./Modal";

export const AlbumPreviewContext = createContext();
const reducer = (state, item) => {
  return [item];
};

export default function List({ url }) {
  const [selectedUser, setSelectedUser] = useReducer(reducer, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useState([
    "name",
    "username",
    "address",
    "company",
    "phone",
    "website",
  ]);

  const { data, isLoading, isError } = ApiGetRequestGeneric(url);
  const searchAlbums = (albums) => {
    return albums.filter((album) => {
      return searchParams.some((newItem) => {
        return (
          album[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <AlbumPreviewContext.Provider value={{ selectedUser, setSelectedUser }}>
      <div className="container-fluid">
        <div className="container mt-1">
          <div className="row search--bar bd-subnavbar py-2">
            <div className="col col-lg-4">
              <div className="input-group input-group-sm w-100 me-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Search
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="content my-3 p-3 bg-body rounded shadow-sm mt-3 mb-3">
            <h6 className="border-bottom pb-2 mb-0">Users</h6>

            {isLoading ? (
              <div className="d-flex justify-content-center m-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              true
            )}

            {isError.connectionError ? (
              <div className="alert alert-danger mt-3" role="alert">
                <h6 className="alert-heading">
                  <strong>Oops...</strong>
                </h6>
                <p>
                  <small>
                    Looks like we've encountered an error accessing this
                    resource due to - {isError.message.toString()}.<br /> If you
                    keep getting error, contact The API Fairy...
                  </small>
                </p>
                <hr />
                <p className="mb-0 text-end">
                  <a className="btn btn-primary btn-sm" href="/" role="button">
                    <small>Try Again</small>
                  </a>
                </p>
              </div>
            ) : (
              true
            )}

            {data && data.length
              ? searchAlbums(data).map((item) => (
                  <Card key={item.id} card={item} />
                ))
              : ""}
          </div>
        </div>
        <Modal />
      </div>
    </AlbumPreviewContext.Provider>
  );
}
