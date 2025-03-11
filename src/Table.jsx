const Table = () => {
  return (
    <table className="table  table-hover table-responsive ">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <button type="button" className="btn btn-primary button-margin ">
              Edit
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
