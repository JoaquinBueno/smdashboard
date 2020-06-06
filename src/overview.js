import React from 'react';
import CardSmall from './card-small.js'
import './overview.css'
import CardSmallLikes from './card-small-likes.js'

const cardSmallList = [
    {
        icon: "images/icon-facebook.svg",
        pageViews: '92',
        growth: 1,
        id: 0,

    },
    
    {
        icon: "images/icon-instagram.svg",
        pageViews: '2008',
        growth: 101,
        id: 1,
    },

    {
        icon: "images/icon-twitter.svg",
        pageViews: '922',
        growth: 10,
        id: 2,
    },

    {
        icon: "images/icon-youtube.svg",
        pageViews: '1537',
        growth: 3,
        id: 3,
    },


]

const cardLikes = [
  {
    icon: "images/icon-facebook.svg",
    likes: '298',
    growth: 8,
    id: 4,

  },
  {
    icon: "images/icon-instagram.svg",
    likes: '4256',
    growth: 153,
    id: 5,
  },
  {
    icon: "images/icon-twitter.svg",
    likes: '2337',
    growth: 22,
    id: 6,
  },
  {
    icon: "images/icon-youtube.svg",
    likes: '2356',
    growth: 5,
    id: 7,
  },
]

function Overview() {
    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                    <div className="grid">
                       
                        {
                            cardSmallList.map(({icon, pageViews, growth, id}) =>
                            (<CardSmall
                                icon = {icon}
                                key= {id}
                                pageViews={pageViews}
                                growth={growth}
                                />)
                                
                            )}
                            {cardLikes.map(({icon, growth, likes, id}) =>
                          (<CardSmallLikes
                              icon={icon}
                              key={id}
                              likes= {likes}
                              growth= {growth}
                              />
                            )
                          )
                        }
                    </div>
            </div>
        </section> 
    )
}

export default Overview;