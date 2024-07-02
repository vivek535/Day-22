import React from 'react';
import './App.css';

const Card = ({ title, price, features, buttonLabel }) => (
  <div className="card">
    <h2>{title}</h2>
    <p className="price">{price}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className={feature.included ? 'included' : 'excluded'}>
          {feature.text}
        </li>
      ))}
    </ul>
    <button className={`btn ${title.toLowerCase()}`}>{buttonLabel}</button>
  </div>
);

const App = () => {
  const cardDetails = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        { text: 'Single User', included: true },
        { text: '50GB Storage', included: true },
        { text: 'Unlimited Public Projects', included: true },
        { text: 'Community Access', included: true },
        { text: 'Unlimited Private Projects', included: false },
        { text: 'Dedicated Phone Support', included: false },
        { text: 'Free Subdomain', included: false },
        { text: 'Monthly Status Reports', included: false },
      ],
      buttonLabel: 'Sign Up for Free',
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        { text: '5 Users', included: true },
        { text: '50GB Storage', included: true },
        { text: 'Unlimited Public Projects', included: true },
        { text: 'Community Access', included: true },
        { text: 'Unlimited Private Projects', included: true },
        { text: 'Dedicated Phone Support', included: true },
        { text: 'Free Subdomain', included: true },
        { text: 'Monthly Status Reports', included: false },
      ],
      buttonLabel: 'Get Started',
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        { text: 'Unlimited Users', included: true },
        { text: '50GB Storage', included: true },
        { text: 'Unlimited Public Projects', included: true },
        { text: 'Community Access', included: true },
        { text: 'Unlimited Private Projects', included: true },
        { text: 'Dedicated Phone Support', included: true },
        { text: 'Free Subdomain', included: true },
        { text: 'Monthly Status Reports', included: true },
      ],
      buttonLabel: 'Go Pro',
    },
  ];

  return (
    <div className="app">
      {cardDetails.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;