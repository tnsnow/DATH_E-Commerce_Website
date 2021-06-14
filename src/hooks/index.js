import { notification } from "antd";
import truncate from "truncate";
import numeral from "numeral";
export const useNotification = () => {
  return (type, description) => {
    if (type === "success") {
      return notification["success"]({
        message: "Success",
        description,
      });
    } else if (type === "warning") {
      return notification["warning"]({
        message: "Warning",
        description,
      });
    } else if (type === "error") {
      return notification["error"]({
        message: "Error",
        description,
      });
    } else {
      return;
    }
  };
};

export const useTruncate = () => {
  const stringTruncated = (text, length) => {
    return truncate(text, Number(length));
  };
  return stringTruncated;
};

export const usePriceFormat = () => {
  const stringFormated = (price, locale) => {
    // return "₫ " + numeral(price).format("0,0[.]00");
    if (!locale) {
      const numberFormat = new Intl.NumberFormat("vn-VN", {
        style: "currency",
        currency: "VND",
      });
      return numberFormat.format(Number(price));
    } else if (locale == "en") {
      return +(Math.round(Number(price) / 23000 + "e+2") + "e-2");
    }
  };
  return stringFormated;
};

export const useRandomColor = () => {
  const result = () => {
    const letters = "0123456789ABCDEF";
    // var color = '#';
    let color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return result;
};
// export const useGetAuth = (url) => {
//   const data = await axios
//     .get(`${process.env.REACT_APP_URL}/${url}`, {
//       headers: {
//         Authorization: `Bearer ${cookies.accessToken}`,
//       },
//     })
//     .catch((err) => err);
//   return data;
// };
