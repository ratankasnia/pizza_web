import { useRouteError } from "react-router-dom";
import Linkbutton from "../../src/ui/LinkButton";

function ErrorPage() {
  const Error = useRouteError();
  console.log(Error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{Error?.data || Error?.message}</p>

      <Linkbutton to="-1">&larr; Go back</Linkbutton>
    </div>
  );
}

export default ErrorPage;
