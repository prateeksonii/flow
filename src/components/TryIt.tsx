import { FC } from "react";

type TryItProps = {
  name: string;
};

const TryIt: FC<TryItProps> = ({ name }) => {
  console.log(name);
  return <div>ok</div>;
};

export default TryIt;
