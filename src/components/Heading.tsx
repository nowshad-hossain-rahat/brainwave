import TagLine from "./Tagline";
import "../assets/scss/Heading.scss";

const Heading = ({
  className,
  title,
  text,
  tag,
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) => {
  return (
    <div className={`${className} heading-section`}>
      {tag && <TagLine className="from-tagline">{tag}</TagLine>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Heading;
