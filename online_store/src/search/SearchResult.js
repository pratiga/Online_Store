 import "./SearchResult.css";
import { Link } from "react-router-dom";

export const SearchResult = ({ result, id }) => {
  return (
    <Link to={`/itemDetails/${id}`}>

    <div
      className="search-result"
    >
      {result}
      console.log(id);
      console.log(result);
    </div>
    </Link>
  );
};