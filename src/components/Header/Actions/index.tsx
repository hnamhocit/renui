import { IoMdMenu } from "react-icons/io";
import { Button, Dropdown } from "renui";

import Content from "./Content";

const Actions = () => {
  return (
    <Dropdown
      className="dark:bg-gray-950"
      trigger={
        <Button isIconOnly isRounded>
          <IoMdMenu size={20} />
        </Button>
      }
    >
      <Content />
    </Dropdown>
  );
};

export default Actions;
