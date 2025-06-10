import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return <h1>Korisnik sa id-em: {id}</h1>;
};

export default UserProfile;
