import { motion } from "framer-motion";
import { useState } from "react";
import "./sidebar.scss";

import LinksComp from "./Links/LinksComp";
import ToggleButtonComp from "./ToggleButton/ToggleButtonComp";

const SidebarComp = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <LinksComp />
      </motion.div>
      <ToggleButtonComp setOpen={setOpen} />
    </motion.div>
  );
};

export default SidebarComp;
