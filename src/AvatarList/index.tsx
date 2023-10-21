import { useState } from "react";
import ListItem from "../common/ListItem/ListItem";
import data from "./mokdata";

const AvatarList = () => {
  const [state, setState] = useState(data);

  const onDelete = (id: number) => {
    const filtredList = state.filter((item) => item.id !== id);
    setState(filtredList);
  };

  return (
    <div>
      {state.map((item) => (
        <div>
          <ListItem
            key={item.id}
            pic={item.pic}
            fullDesc={item.fullDesc}
            source={item.source}
            downloadCount={item.downloadCount}
            onClick={() => onDelete(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarList;
