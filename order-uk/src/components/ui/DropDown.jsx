import { ClickAwayListener } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function DropDown({
  options = [],
  mainClassName,
  boxClassName,
  itemsClassName,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectItem, setSelectItem] = useState(options[2] ?? "");

  const handleClickAway = () => setIsDropdownVisible(false);

  return (
    <div className="w-full h-full flex justify-center">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="relative">
          <div
            onClick={() => setIsDropdownVisible((prev) => !prev)}
            className={`${mainClassName} flex items-center justify-between cursor-pointer`}
          >
            {selectItem}
            <ChevronDown
              className={`duration-150 ${isDropdownVisible ? "rotate-180" : ""}`}
            />
          </div>

          {isDropdownVisible && (
            <div className={`${boxClassName} absolute z-10`}>
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectItem(option);
                    setIsDropdownVisible(false);
                  }}
                  className={`${itemsClassName} px-3 py-2 cursor-pointer `}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default DropDown;
