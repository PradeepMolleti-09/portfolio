// @ts-nocheck
import { mapEach } from "../utils/dom";
import Component from "../classes/Component";

export default class Time extends Component {
  constructor() {
    super({
      element: "body",
      elements: {
        hour: "[data-hour]",
        minute: "[data-minute]",
      },
    });

    // Initialize with null to ensure the first update triggers
    this.oldHour = null;
    this.oldMinute = null;

    this.updateTime();

    setInterval(this.updateTime, 1000);
  }

  get currentTime() {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    };

    // Use a fixed locale to ensure predictable formatting (HH:mm)
    const time = new Intl.DateTimeFormat("en-GB", options).format(new Date());

    return time;
  }

  get formattedTime() {
    const time = this.currentTime;
    // Intl.DateTimeFormat with en-GB and hour12: false returns "HH:mm"
    const [hourValue, minuteValue] = time.split(":");

    return {
      hourValue,
      minuteValue,
    };
  }

  updateTime() {
    const { hour, minute } = this.elements;
    const { hourValue, minuteValue } = this.formattedTime;

    if (hour && this.oldHour !== hourValue) {
      mapEach(hour, (element) => {
        element.classList.add("flash");
        setTimeout(() => {
          element.innerHTML = hourValue;
        }, 500);

        setTimeout(() => {
          element.classList.remove("flash");
        }, 1000);
      });
      this.oldHour = hourValue;
    }

    if (minute && this.oldMinute !== minuteValue) {
      mapEach(minute, (element) => {
        element.classList.add("flash");

        setTimeout(() => {
          element.innerHTML = minuteValue;
        }, 500);

        setTimeout(() => {
          element.classList.remove("flash");
        }, 1000);
      });
      this.oldMinute = minuteValue;
    }
  }
}
