import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import routes from "./route/const";

function changeTitle({ pathname }) {
  // todo
  const routePath = routes.find(z => z.path === pathname);
  if (routePath) {
    document.title = `博州防疫-${routePath.title}`;
  } else {
    document.title = "博州防疫";
  }
}

export default function({ children }) {
  let history = useHistory();
  useEffect(() => {
    history.listen(changeTitle);
  }, [history]);

  return children;
}
