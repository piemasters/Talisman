const plans = [
  {
    id: "small",
    name: "Small",
    description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage",
  },
  {
    id: "medium",
    name: "Medium",
    description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
  },
  {
    id: "large",
    name: "Large",
    description: "16 GB RAM / 8 CPUS / 320 GB SSD Storage",
  },
];

export default function Example() {
  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex items-center h-6">
              <input
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="plan"
                type="radio"
                defaultChecked={plan.id === "small"}
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>{" "}
              <span id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
