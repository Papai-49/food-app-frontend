import React from 'react';
import './Services.css';

function Services() {
  const serviceList = [
    {
      title: "Home Delivery",
      description: "We deliver hot, delicious meals right to your doorstep, fast and fresh.",
      image: "https://5.imimg.com/data5/YU/NE/MY-15729538/goods-delivery-services-500x500.jpg"
    },
    {
      title: "Online Ordering",
      description: "Easily place your orders through our website with a smooth checkout experience.",
      image: "https://blinkco.io/wp-content/uploads/2021/08/food-deliver-yapp-interface-mobile.jpg"
    },
    {
      title: "Catering Services",
      description: "Hosting an event? We offer full-scale catering for parties, events, and meetings.",
      image: "https://th.bing.com/th/id/R.966f1315312f5c81886de104b1416d8d?rik=%2bw6J3MbZUjydcg&riu=http%3a%2f%2fbestdallascatering.com%2fwp-content%2fuploads%2f2016%2f04%2fdallas-best-catering-services.jpg&ehk=ynZ8BAYCzeJuzHfeCXx7QMBfnGlpmJwgZwXWhl6lBII%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Healthy Meal Options",
      description: "Try our fresh and healthy options for guilt-free indulgence.",
      image: "https://media1.popsugar-assets.com/files/thumbor/q_eu4G_Yfvd1qUU7rkJYpC9Qalk/0x532:1560x2092/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/102/n/1922729/2010a3325dd3450317e273.27544324_/i/healthy-meal-prep-dinner-recipes.jpg"
    }
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;