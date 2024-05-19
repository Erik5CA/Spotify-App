import "../styles/Loader.css";

/**
 * A function to render a loading animation.
 *
 * @returns {JSX.Element} - A JSX element representing the loading animation.
 */
export function Loading() {
  return (
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default Loading;
