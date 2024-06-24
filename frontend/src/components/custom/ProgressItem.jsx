import { motion } from "framer-motion";

const ProgressItem = ({ width, bgColor, name, time }) => {
  return (
    <>
      {/* item */}
      <div className="item">
        <div className="name">
          <p>{name}</p>
        </div>

        <div className="time">
          <p>{time}</p>
        </div>

        {/* progressbar */}
        <div className="progressBar">
          <motion.div
            className="bar"
            initial={{ width: 0 }}
            animate={{ width: width }}
            transition={{ duration: 1 }}
            style={{ background: bgColor }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default ProgressItem;
