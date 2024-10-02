export const SliderField = ({ label, name, min, max, step }) => (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
);
  

  