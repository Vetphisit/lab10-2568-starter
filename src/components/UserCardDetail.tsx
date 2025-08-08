import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";
import { type UserCarddetailProps } from "../libs/CardUserType";

export const UserCardDetail = ({ email, address }: UserCarddetailProps) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};
