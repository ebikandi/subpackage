import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Text } from "react-native";
import { Router } from "./Router";
import { Route1 } from "./Components/Route1";
import { Route2 } from "./Components/Route2";
import { Fallback } from "./Components/Fallback";
import { useParams } from "react-router-dom";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/route1",
      element: <Route1 />,
    },
    {
      path: "/route2/:routeId",
      element: <Route2 />,
      exact: true,
    },
    {
      path: "*",
      element: <Fallback />,
    },
  ]);
  return element;
};

const SubRoot = () => {
  return <AppRoutes />;
};

export { SubRoot };
