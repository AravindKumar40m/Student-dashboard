import React from "react";
import { CardBody, CardContainer, CardItem } from "./../components/ui/3d-card";

export default function Card({ Student }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[250px] sm:w-[270px] h-auto rounded-xl p-8 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NAME: {Student.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ROLL-NO: {Student.rollNo}
          </p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
