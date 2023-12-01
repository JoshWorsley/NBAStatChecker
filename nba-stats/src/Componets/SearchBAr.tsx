import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch:(searchText:string)=>void;
}

const SearchBAr = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          width={300}
          placeholder="Search for player"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBAr;
