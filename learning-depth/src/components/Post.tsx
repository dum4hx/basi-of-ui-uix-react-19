import { useState } from "react";
import PostBtn from "./PostBtn";
import PostDropdown from "./PostDropdown";
import PostToggle from "./PostToggle";

export default function Post() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className="post mx-auto rounded-md p-2  w-75 md:w-72 text-white flex justify-center  flex-col">
      <div className="flex justify-evenly gap-2 w-full">
        <PostBtn>App</PostBtn>
        <PostBtn>Database</PostBtn>
      </div>
      <PostDropdown defaultVal="All" title="App usage" options={["5 min", "15 min", "25 min"]} />
      <PostDropdown defaultVal="Priority" title="Sort by" options={["A", "B", "C", "D"]} />
      <PostToggle title="Show recent activity" checked={checked1} setChecked={setChecked1} />
      <PostToggle title="Fast refresh enabled" checked={checked2} setChecked={setChecked2} />
      <PostDropdown defaultVal="10 Secs" title="Max refresh limit" options={["15 Secs", "20 Secs", "30 Secs"]} />
    </div>
  );
}
