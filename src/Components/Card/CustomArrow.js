import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Button
    size="large"
    type="ghost"
    shape="circle"
    {...props}
    className={
      "right-arrow " +
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
  >
    <RightOutlined style={{ fontSize: "18px" }} />
  </Button>
);

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  // <button
  //   {...props}
  //   className={
  //     "left-arrow" +
  //     "slick-prev slick-arrow" +
  //     (currentSlide === 0 ? " slick-disabled" : "")
  //   }
  //   aria-hidden="true"
  //   aria-disabled={currentSlide === 0 ? true : false}
  //   type="button"
  // >
  //   Previous
  // </button>
  <Button
    size="large"
    type="ghost"
    shape="circle"
    {...props}
    className={
      "left-arrow " +
      "slick-prev slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
  >
    <LeftOutlined style={{ fontSize: "18px" }} />
  </Button>
);
