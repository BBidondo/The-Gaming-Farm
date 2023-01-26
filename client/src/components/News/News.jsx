import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("https://vandal.elespanol.com/xml.cgi").then((response) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");
      const data = Array.from(items).map((item) => {
        const imageRegex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
        const match = imageRegex.exec(
          item.getElementsByTagName("description")[0]?.textContent
        );
        const imageUrl = match ? match[1] : null;
        return {
          title: item.getElementsByTagName("title")[0]?.textContent || "",
          link: item.getElementsByTagName("link")[0]?.textContent || "",
          pubDate: item.getElementsByTagName("pubDate")[0]?.textContent || "",
          creator:
            item.getElementsByTagNameNS(
              "http://purl.org/dc/elements/1.1/",
              "creator"
            )[0]?.textContent || "",
          imageUrl: imageUrl,
        };
      });
      setNews(data);
    });
  }, []);

  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const newsList = news.map((noticia, index) => {
    return (
      <div className="cardNews" key={index}>
        <div className="card-details">
          <p class="text-title">{noticia.title}</p>

          <p>{noticia.pubDate}</p>
          <p>{noticia.creator}</p>
          {noticia.imageUrl && (
            <img
              src={noticia.imageUrl}
              alt={noticia.title}
              style={{ maxWidth: "200px" }}
            />
          )}
        </div>
        <a href={noticia.link} target="_blank">
          <button class="card-button">Link</button>
        </a>
      </div>
    );
  });

  const settings = {
    className: "slider variable-width",
    centerMode: false,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    variableWidth: true,
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button className="btnPrev" onClick={previous}></button>
        <button className="btnNext" onClick={next}></button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {newsList}
      </Slider>
    </div>
  );
}
