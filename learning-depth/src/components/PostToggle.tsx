export default function PostToggle({ title, checked = false, setChecked }: { title: string; checked?: boolean; setChecked: (checked: boolean) => void }) {
  return (
    <label className="post-child-container cursor-pointer">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{title}</span>
      <input type="checkbox" value="" className="sr-only peer" defaultChecked={checked} onClick={() => setChecked(!checked)} />
      <div className="relative w-11 h-6 bg-black peer-focus:outline-none rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-white"></div>
    </label>
  );
}
