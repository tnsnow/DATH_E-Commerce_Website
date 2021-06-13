import { Button, Carousel, Col, Image, Row, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import BannerEvent from "../../assets/images/banners/Source/event2.png";
import BannerEvent2 from "../../assets/images/banners/Source/event1.png";
import FullWidthBanner from "./FullWidthBanner";
import CustomTitle from "../Detail/components/CustomTitle";
export default function HeaderBanner() {
  return (
    <>
      <FullWidthBanner
        content={
          <>
            <Space size={2} direction="vertical">
              <Title level={3}>Welcome to Cartya !</Title>
              <Text className="font-16" type="secondary">
                Best online shopping platform
              </Text>
            </Space>
            <Button>Get Started</Button>
          </>
        }
      />
      <CustomTitle text={"This week"} />
      <Row>
        <Col span={18} style={{ padding: "0 20px 0 0" }}>
          <Carousel draggable dots autoplay>
            <div
              className="carousel-banner-1"
              style={{ backgroundImage: BannerEvent2 }}
            >
              <Space size="large" className="content" direction="vertical">
                <Space size={"small"} direction="vertical">
                  <Space direction="vertical">
                    <Text style={{ fontSize: 12 }} type="secondary">
                      23/12 - 1/2
                    </Text>
                    <Title level={2} style={{ fontWeight: "bold" }}>
                      One Sale <br /> ManyThings
                    </Title>
                  </Space>
                  <Text style={{ fontSize: 14 }} type="secondary">
                    The most biggest sale event in this year <br />
                    you dont want to miss
                  </Text>
                </Space>
                <div>
                  <Button className="d-flex justify-content-center align-items-center">
                    Get Started {<ArrowRightOutlined />}
                  </Button>
                </div>
              </Space>
            </div>
            <div className="carousel-banner-2">
              <div className="banner-img">
                <img
                  height="100%"
                  src={BannerEvent}
                  alt="banner2"
                  srcSet={BannerEvent}
                />
              </div>
              <Space size="large" className="content" direction="vertical">
                <Space size={10} direction="vertical">
                  <Title level={3} style={{ fontWeight: "bold" }}>
                    Your favorite <br /> products made <br /> affordable for you
                  </Title>
                  <Text style={{ fontSize: 14 }} type="secondary">
                    Be the first to hear of our <br /> exciting sales & promos
                    and get updates
                  </Text>
                </Space>
                <div>
                  <Button className="d-flex justify-content-center align-items-center">
                    Get Started {<ArrowRightOutlined />}
                  </Button>
                </div>
              </Space>
            </div>
          </Carousel>
        </Col>
        <Col span={6}>
          <div className="content-banner-3">
            <Space className="content" direction="vertical">
              <Space size={2} direction="vertical">
                <Title level={4}>Become our sellers</Title>
                <Text style={{ fontSize: 14 }} type="secondary">
                  Every users can be a seller
                </Text>
              </Space>
              <div className="d-flex justify-content-center">
                <Button className="d-flex justify-content-center align-items-center">
                  Get Started {<ArrowRightOutlined />}
                </Button>
              </div>
            </Space>
          </div>
        </Col>
      </Row>
    </>
  );
}
