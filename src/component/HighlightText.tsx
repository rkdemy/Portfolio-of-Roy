import { useInView } from "react-intersection-observer";

const HighlightText = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <span
      ref={ref}
      style={{
        color: inView ? "#4a1e9e" : "grey",
        backgroundColor: inView ? "#ddcbff" : "black",
        transition: "all 0.5s ease",
      }}
    >
      {children}
    </span>
  );
};

export default HighlightText;
