import react from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <br />
      <Link to="/Page2/999">URL Parameter</Link>
    </div>
  );
};
