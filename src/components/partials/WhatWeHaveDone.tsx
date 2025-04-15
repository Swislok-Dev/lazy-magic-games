import React from "react";
import Image from "next/image";

function WhatWeHaveDone() {
  return (
    <>
      <Image
        src={"/images/What_we_have_done/LMG_presents.png"}
        height={1200}
        width={1200}
        alt={"LMG presents"}
      />
      <h2 className="text-centered uppercase bg-black-dark">
        What we have done
      </h2>
      <Image
        src={"/images/What_we_have_done/what_we_did.png"}
        height={1200}
        width={1200}
        alt={"LMG presents"}
      />
      <h2 className="text-centered uppercase bg-black-dark">
        What we are doing
      </h2>
      <Image
        src={"/images/What_we_have_done/eventpics2.png"}
        height={1200}
        width={1200}
        alt={"LMG presents"}
        id="eventpics2"
      />
      <span className="bg-black-dark text-centered"></span>
      <Image
        src={"/images/What_we_have_done/eventpics.png"}
        height={1200}
        width={1200}
        alt={"LMG presents"}
        id="eventpics"
      />
      <h2 className="text-centered uppercase bg-black-dark">
        Where we are going
      </h2>
      <Image
        src={"/images/What_we_have_done/where_we_are_going.png"}
        height={1200}
        width={1200}
        alt={"LMG presents"}
      />
    </>
  );
}

export default WhatWeHaveDone;
