import { FC, ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const PrivateRoute: FC<IProps> = ({ children }: IProps) => {
  console.log(sessionStorage.getItem("access_token"));
  const history = useHistory();
  if (!sessionStorage.getItem("access_token")) {
    history.replace("/login");
  }
  return <>{children}</>;
};

export default PrivateRoute;
