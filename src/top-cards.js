import React from 'react';
import Card from './card.js';
import './top-cards.css'


const cardListData = [
  {
    username: "@joaquin_buenoo",
    id: 0,
    followers: 2019,
    todayFollower: 12,
    icon: "/images/icon-facebook.svg",
    name: "facebook"
  },
  {
    username: "@joaquin_buenoo",
    id: 1,
    followers: 2020,
    todayFollower: 33,
    icon: '/images/icon-twitter.svg',
    name: "twitter"
  },
  {
    username: "@joaquin_buenoo",
    id: 2,
    followers: 2021,
    todayFollower: 98,
    icon: '/images/icon-instagram.svg',
    name: "instagram"
  },
  {
    username: "@joaquin_buenoo",
    id: 3,
    followers: 2022,
    todayFollower: 92,
    icon:'/images/icon-youtube.svg',
    name: "youtube"

  }
]


function TopCardList() {
    return(
        <section className="top-cards">
          <div className="wrapper">
            <div className="grid">
              {
              cardListData.map((cardData) => <Card key={cardData.id} {...cardData}/>)
              }
            </div>
          </div>
      </section> 
    )
}

export default TopCardList;