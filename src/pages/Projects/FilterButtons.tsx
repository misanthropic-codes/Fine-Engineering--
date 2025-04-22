import { Button } from "@/components/ui/button";

const FilterButtons = ({ filters, activeFilter, setActiveFilter }) => (
  <div className="flex flex-wrap gap-3 justify-center">
    {filters.map((filter) => (
      <Button
        key={filter.id}
        variant={activeFilter === filter.id ? "default" : "outline"}
        className={
          activeFilter === filter.id
            ? "bg-[#d0bc8f] hover:bg-[#c0786a] border-[#d0bc8f]"
            : "border-[#d0bc8f] text-[#474454] hover:text-white hover:bg-[#d0bc8f] dark:text-white"
        }
        onClick={() => setActiveFilter(filter.id)}
      >
        {filter.label}
      </Button>
    ))}
  </div>
);

export default FilterButtons;
