import {useContext} from 'react'
import {AlbumPreviewContext} from './List'

export default function Modal() {
  const {selectedUser} = useContext(AlbumPreviewContext)
  return (
    <div
      className="modal fade"
      id="modalAlbumDetail"
      tabIndex="-1"
      aria-labelledby="modalAlbumDetailLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        {selectedUser.map((item, key) => (
          <div className="card" key={key}>
            <div className="card card-cover h-100 overflow-hidden text-white rounded-5">
              <div className="d-flex flex-column h-100 p-2 pb-3 text-shadow-1 nav-background">
                <h3 className="pt-5 mt-5 lh-1 fw-bold">{item.name}</h3>
                <h6 className="card-subtitle mb-2 me-3">
                  <small>{item.username}</small>
                </h6>
              </div>
            </div>
            <div className="card-body">
              <div className="row border-bottom mb-2 pb-3">
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Website</strong>
                    </small>
                    <br />
                    <small className="text-muted">{item.website}</small>
                  </p>
                </div>
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Phone</strong>
                    </small>
                    <br />
                    <small className="text-muted">{item.phone}</small>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Company</strong>
                    </small>
                    <br />
                    <small className="text-muted">{item.company.name}</small>
                  </p>
                </div>
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Address</strong>
                    </small>
                    <br />
                    <small className="text-muted">
                      {item.address.suite}, {item.address.street}
                      <br />
                      {item.address.city}, {item.address.zipcode}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer text-end">
              <a
                href="#"
                role="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal">
                Close
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
