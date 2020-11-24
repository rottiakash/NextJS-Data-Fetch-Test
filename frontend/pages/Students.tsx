import Card from "../Components/Card";
const axios = require("axios").default;

const Students = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Students</h1>
      {data.map((student) => (
        <Card name={student.name} usn={student.usn} key={student.usn} />
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await axios.get("http://localhost:8080");
  return {
    props: { data: data.data }, // will be passed to the page component as props
  };
}

export default Students;
