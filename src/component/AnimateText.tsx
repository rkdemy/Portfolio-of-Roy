import { useInView } from "react-intersection-observer";

const AnimateText = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{
        transform: inView ? "none" : "translateY(20px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s ease",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateText;
