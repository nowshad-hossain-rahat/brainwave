import { notification1 } from "../assets";
import { notificationImages } from "../constants";
import "../assets/scss/Notification.scss";

export default function Notification({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div className={`${className || ""} notification`}>
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="icon"
      />

      <div className="notification-right-side">
        <h6 className="heading">{title}</h6>

        <div className="profile-container">
          <ul>
            {notificationImages.map((item, index) => (
              <li key={index}>
                <img src={item} width={20} height={20} alt={item} />
              </li>
            ))}
          </ul>
          <div className="time-text">1m ago</div>
        </div>
      </div>
    </div>
  );
}
