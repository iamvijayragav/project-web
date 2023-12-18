import React, { useEffect, useRef } from "react";
import "../Modal/popup.css";
import { NEW_UPDATES } from "./New_Update";

export default function Popup() {
  const modalRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (modalRef.current) {
        modalRef.current.scrollTop += 1;
      }
    }, 25);
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <>
      <div className="modal" ref={modalRef}>
        <h3 className="update">New Update</h3>
        <div className="modal-inside">
          <ul type="square">
            {
              NEW_UPDATES.map((item, id) => (
                <li key={id}>{item.update}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
