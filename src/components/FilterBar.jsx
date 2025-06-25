export default function FilterBar() {
  return (
    <div className="filter-bar">
      <input type="text" placeholder="Search..." />
      <div className="filters">
        <select>
          <option>Location</option>
        </select>
        <select>
          <option>Difficulty</option>
        </select>
        <select>
          <option>Length</option>
        </select>
      </div>
    </div>
  );
}
