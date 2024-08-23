import React from 'react';

interface CardProps {
  title: string;
  views: number;
}

const Card: React.FC<CardProps> = ({ title, views }) => {
  return (
    <div className="card bg-base-100 w-90 shadow-xl m-4 ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{views} views</p>
      </div>
    </div>
  );
};

export default Card;
