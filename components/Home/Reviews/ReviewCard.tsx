import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ReviewCard = ({ name, image, role }: Props) => {
  return (
    <div className="m-2 ">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-400 font-medium">
        &quot; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam veniam
        ipsa molestiae magni minima quo itaque, quasi velit hic consequuntur!   &quot;
      </p>
      <h3 className="mt-6 text-xl font-semibold text-gray-200">{name}</h3>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ReviewCard;
