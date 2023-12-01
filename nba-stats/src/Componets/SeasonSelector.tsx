import { Select } from "@chakra-ui/react";
import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SeasonSelector = ({ onSearch }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSearch(selectedValue);

  };

  return (
    <div>
      <Select
        width={300}
        borderRadius={30}
        placeholder="Select a season"
        onChange={handleChange}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </Select>
    </div>
  );
};

export default SeasonSelector;