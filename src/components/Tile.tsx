import React from "react";

const Tile = ({ candy, candyId }: { candy: string, candyId: number }) => {
  return (
    <div 
        className="h-16 w-16 flex justify-center items-center m-0.5 rounded-lg select-none"
        style={{
            boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
        }}
    >
        {candy && <img src={candy} alt="candy" className="h-14 w-14" candy-id={candyId} />}
    </div>
  )
}

export default Tile;