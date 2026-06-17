import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Articles.css';

import img1 from '../../assets/aricles/article-1.jpeg';
import img2 from '../../assets/aricles/article-2.jpeg';
import img3 from '../../assets/aricles/article-3.jpeg';
import img4 from '../../assets/aricles/article-4.jpeg';
import img5 from '../../assets/aricles/article-5.jpeg';

const articles = [
  {
    category: 'Dispatching',
    title: 'How 24/7 Truck Dispatching Boosts Your Fleet Revenue',
    excerpt:
      'Discover how round-the-clock dispatching keeps your trucks moving, reduces empty miles, and secures higher-paying loads for owner-operators.',
    image: img1,
  },
  {
    category: 'Compliance',
    title: 'DOT & ELD Compliance: A Simple Guide for Carriers',
    excerpt:
      'Stay ahead of regulations. Learn the essential DOT and ELD requirements every carrier needs to avoid fines and operational disruptions.',
    image: img2,
  },
  {
    category: 'Freight Tips',
    title: 'Negotiating the Best Freight Rates in a Tight Market',
    excerpt:
      'Master the art of rate negotiation. Our dispatchers share proven strategies to secure premium freight that matches your routes and schedule.',
    image: img3,
  },
  {
    category: 'Fleet Management',
    title: 'Smart Fleet Management to Maximize Your Uptime',
    excerpt:
      'Keep every truck productive with proactive maintenance scheduling, route optimization, and real-time freight tracking that saves you money.',
    image: img4,
  },
  {
    category: 'Owner-Operators',
    title: 'Why Owner-Operators Partner With Meg Logistics',
    excerpt:
      'From single trucks to large fleets, see how our tailored dispatch solutions streamline operations and boost profitability for owner-operators.',
    image: img5,
  },
];

export default function Articles() {
  return (
    <section className="articles-section">
      <div className="articles-container">

        <div className="articles-heading">
          <span className="articles-tag">Our Blog</span>
          <h2 className="articles-title">Meg Logistics Articles</h2>
          <p className="articles-subtitle">
            Insights, tips, and industry updates to keep your trucking business
            running swift &amp; steady.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="articles-swiper"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <article className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} loading="lazy" />
                </div>

                <div className="article-body">
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <a href="#" className="article-link">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
