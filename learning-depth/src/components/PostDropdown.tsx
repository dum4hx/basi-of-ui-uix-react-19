export default function PostDropdown({ defaultVal, title, options }: { defaultVal: string; title: string; options: string[] }) {
  return (
    <div className="post-child-container">
      <h3 className="font-semi">{title}</h3>
      <select name={defaultVal} id={defaultVal} defaultValue={defaultVal} className="post-select">
        <option value={defaultVal}>{defaultVal}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
