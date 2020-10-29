import MasterPage from "../../components/masterpage";
import slug from "slug";
import { ListGroup } from "react-bootstrap";
const Person = ({ person }) => {
  return (
    <MasterPage>
      <ListGroup>
        <ListGroup.Item>
          <b>Name</b>:{person.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Height:</b>
          {person.height}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Hair Color:</b>
          {person.hair_color}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Birth Year:</b>
          {person.birth_year}
        </ListGroup.Item>
      </ListGroup>
    </MasterPage>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://swapi.dev/api/people/");
  const people = await res.json();
  const paths = people.results.map((person, idx) => ({
    params: { id: slug(person.name) + `-${idx + 1}` },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const id = params.id.split("-").slice(-1)[0];
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
}
export default Person;
