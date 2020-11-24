import Card, { Student } from "../Components/Card";
import * as a from "axios";
import { FunctionComponent } from "react";
const axios = a.default;

interface StudentsProps {
  data: Array<Student>;
}

const Students: FunctionComponent<StudentsProps> = ({ data }) => {
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
