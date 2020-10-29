import Link from "next/link";
import slug from "slug";
import MasterPage from "../components/masterpage";
import { ListGroup } from "react-bootstrap";
const People = ({ people }) => {
  return (
    <MasterPage>
      <ListGroup variant="flush">
        {people.results.map((person, idx) => (
          <ListGroup.Item>
            <Link
              href="/person/[id]"
              as={`/person/${slug(person.name)}-${idx + 1}`}
            >
              <a>{person.name}</a>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MasterPage>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://swapi.dev/api/people/");
  const people = await res.json();
  return {
    props: {
      people,
    },
  };
}

export default People;
