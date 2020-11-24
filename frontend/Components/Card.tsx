import { FunctionComponent } from "react";

interface CardProps {
  name: string;
  usn: string;
}

const Card: FunctionComponent<CardProps> = ({ name, usn }) => {
  return (
    <section
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "teal",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginBottom: "10px",
        fontSize: "1.5rem",
      }}
    >
      Name:{name}
      <br />
      USN:{usn}
    </section>
  );
};

export default Card;
