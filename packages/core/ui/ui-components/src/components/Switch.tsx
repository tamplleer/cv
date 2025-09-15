export const Switch = ({ selected, setSelected }: { selected: boolean, setSelected: () => void }) => {
  return <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" onClick={setSelected} checked={selected} />
    <div
      className="bg-neutral-50 peer ring-0 rounded-full outline-none
       duration-300 after:duration-500 w-8 h-8 shadow-md
        peer-focus:outline-none after:content-['🌒'] after:rounded-full
         after:absolute after:outline-none after:6 after:w-6 after:bg-gray-50
         after:top-1 after:left-1 after:flex after:justify-center after:items-center
          peer-hover:after:scale-75 peer-checked:after:content-['☀'] after:-rotate-180
           peer-checked:after:rotate-0">
    </div>
  </label>;

};
