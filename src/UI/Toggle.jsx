export default function Toggle({handleToggle, toggleLabel}) {
  return (
    <div>
      <label className="block relative bg-orange-500 rounded-xl w-20 h-10 hover:cursor-pointer">
        <input type="checkbox"  className="absolute opacity-0 h-0 peer" onChange={handleToggle} aria-label={toggleLabel}/>
        <span className="before:h-8 before:w-[36px] before:bg-white before:left-1 before:top-1 before:absolute before:rounded-[9px] before:transition-all peer-checked:before:translate-x-[36px] before:duration-300"/>
      </label>
    </div>
  )
}
