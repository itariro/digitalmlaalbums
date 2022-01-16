import ApiGetRequestGeneric from "../../hooks/ApiGetRequestGeneric";

export default function ApiGetRequestTest({ requestEndPoint }) {
  const { isError, data } = ApiGetRequestGeneric(requestEndPoint);
  return (
    <div data-testid="container_connection_result">
      {isError.connectionError ? (
        <div
          className="alert alert-danger mt-3"
          role="alert"
          data-testid="container_connection_error_display"
        >
          <h6 className="alert-heading">
            <strong>Oops...</strong>
          </h6>
          <p>
            <small>
              Looks like we've encountered an error accessing this resource due
              to - {isError.message.toString()}.<br /> If you keep getting
              error, contact The API Fairy...
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
        ? data.map((item) => <div key={item.id}>{item.name}</div>)
        : ""}
    </div>
  );
}
