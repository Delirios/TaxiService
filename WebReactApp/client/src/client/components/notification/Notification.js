import { createFactory } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Notification = async (type) => {
    console.log(type);
    console.log(type);
    let notification = {
      notification: '',
      component: <NotificationContainer />,
    };
    switch (String(type)) {
      case "OK":
        notification ={
          notification: NotificationManager.success(
            "Success message",
            "Title here"
          ),
        }
        return notification;
      case "Username already taken":
        notification ={
          notification : NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          })
        }
        return notification;
      default:
        console.log(type);
        return null;
    }
  };

export default Notification;
