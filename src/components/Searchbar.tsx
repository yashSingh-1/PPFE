import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Searchbar = () => {
  return (
    <div className="space-y-2">
      <div className="flex-col justify-center items-center">
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input type="text" placeholder="Link" className="md:w-[600px]" />
        </div>
      </div>
      <div className="w-full flex justify-end items-end">
      <Button className="bg-blue-600 font-mono w-full md:w-fit">
        Analyse
      </Button>
      </div>
    </div>
  );
};

export default Searchbar;
