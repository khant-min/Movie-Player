import { AiFillStar } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export const Rating = (rate: number) => {
  return Array(Math.round(rate / 2))
    .fill(0)
    .map(() => (
      <AiFillStar key={uuidv4()} className="text-yellow-400 text-2xl" />
    ));
};
