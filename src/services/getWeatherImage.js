import cloudy from "../images/cloudy.svg";
import rainy from "../images/rain.svg";
import sun from "../images/sun.svg";
import Haze from "../images/Haze.png";
import notFound from "../images/not-available.png";
export default function getImageUrl(data) {
  let WeatherImg;
  switch (data) {
    case "rain":
      WeatherImg = rainy;
      break;

    case "cloudy":
    case "clouds":
      WeatherImg = cloudy;
      break;

    case "sun":
    case "clear":
      WeatherImg = sun;
      break;

    case "haze":
      WeatherImg = Haze;
      break;

    default:
      WeatherImg = notFound;
  }
  return WeatherImg;
}
