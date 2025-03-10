const Table = ({ data }) => {
  return (
    <table className="table  table-hover table-responsive ">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((items, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{index + 1}</td>
            <td>{items.firstName}</td>
            <td>{items.lastName}</td>
            <td>{items.age}</td>
            <td>
              <button type="button" className="btn btn-primary button-margin ">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
