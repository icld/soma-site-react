const albumData = [
  {
    artist: "Sterolab",
    recordings: [
      {
        album: "Emperor Tomato Ketchup",
        credits: "P,E,M,Mu",
        label: "Elektra",
        artworkURL:
          "https://ia601607.us.archive.org/29/items/mbid-e530b7a1-30d3-31ab-8a31-c6ff75a5c6c5/mbid-e530b7a1-30d3-31ab-8a31-c6ff75a5c6c5-1892582817.jpg",
      },
      {
        album: "Dots & Loops",
        label: "Elektra",
        credits: "P,E,M,Mu",
        artworkURL:
          "https://coverartarchive.org/release-group/dcc1e5d0-c35f-3e4a-b0d2-b53b23eb906f/front.jpg",
      },
      {
        album: "Cobra and Phases Group Play Voltage in the Milky Night",
        label: "Elektra",
        credits: "P,E,M,Mu",
        artworkURL:
          "https://archive.org/download/mbid-20b90a25-7c54-40fb-8884-1792b18f7c1d/mbid-20b90a25-7c54-40fb-8884-1792b18f7c1d-2633490448_thumb500.jpg",
      },
      {
        album: "Sound Dust",
        label: "Elektra",
        credits: "P,E,M,Mu",
        artworkURL:
          "https://images-na.ssl-images-amazon.com/images/I/51QOIiMKliL.jpg",
      },
    ],
  },
  {
    artist: "Broken Social Scene",
    recordings: [
      {
        album: "Forgiveness Rock Record",
        credits: "P,E,M,Mu",
        label: "Arts and Crafts",
        artworkURL:
          "https://archive.org/download/mbid-5eb097b3-b909-4306-954e-b7196c687fbd/mbid-5eb097b3-b909-4306-954e-b7196c687fbd-12401749387_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Modest Mouse",
    recordings: [
      {
        album: "Strangers To Ourselves",
        credits: "M",
        label: "Epic",
        artworkURL:
          "https://archive.org/download/mbid-70566981-7742-4733-80e6-fc71e8c6101d/mbid-70566981-7742-4733-80e6-fc71e8c6101d-23588756975_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Yo La Tengo",
    recordings: [
      {
        album: "Fade",
        credits: "P,E,M",
        label: "Matador",
        artworkURL:
          "https://archive.org/download/mbid-306adcf4-39b2-4706-919a-f960cc7a1c48/mbid-306adcf4-39b2-4706-919a-f960cc7a1c48-2930110026_thumb500.jpg",
      },
      {
        album: "There's A Riot Going On",
        credits: "M",
        label: "Matador",
        artworkURL:
          "https://archive.org/download/mbid-acb25a17-7532-4a16-8814-eab70d3e14ac/mbid-acb25a17-7532-4a16-8814-eab70d3e14ac-19402835981_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Teenage Fanclub",
    recordings: [
      {
        album: "Man-Made",
        credits: "P,E,M",
        label: "Merge",
        artworkURL:
          "https://archive.org/download/mbid-33bd25cc-5e51-488c-b9aa-4304fad540d2/mbid-33bd25cc-5e51-488c-b9aa-4304fad540d2-27531741200_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Jaga Jazzist",
    recordings: [
      {
        album: "One-Armed Bandit",
        credits: "M",
        label: "Ninja Tune",
        artworkURL:
          "https://archive.org/download/mbid-95b1f376-e51a-4f15-bb34-8a0a27c18ee8/mbid-95b1f376-e51a-4f15-bb34-8a0a27c18ee8-10242809350_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Tortoise",
    recordings: [
      {
        album: "Tortoise",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-c1b0eae2-6d66-4424-a8b3-5ae7ea20a2b0/mbid-c1b0eae2-6d66-4424-a8b3-5ae7ea20a2b0-8213201002_thumb500.jpg",
      },
      {
        album: "Millions Now Living Will Never Die",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-08da1a27-a2d1-3eae-a5b0-74a935619800/mbid-08da1a27-a2d1-3eae-a5b0-74a935619800-21103719601_thumb500.jpg",
      },
      {
        album: "TNT",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-0353395b-f61f-4b90-87e2-7aa5ec4246cd/mbid-0353395b-f61f-4b90-87e2-7aa5ec4246cd-19204663031_thumb500.jpg",
      },
      {
        album: "Standards",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-813c5e7f-d4f2-4326-ade2-98f5fae0663a/mbid-813c5e7f-d4f2-4326-ade2-98f5fae0663a-9735064623_thumb500.jpg",
      },
      {
        album: "It's All Around You",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-60a592c7-5f59-4d83-bd28-02c64470a207/mbid-60a592c7-5f59-4d83-bd28-02c64470a207-14952630882_thumb500.jpg",
      },
      {
        album: "The Brave and the Bold",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-5e83ea65-df0b-431a-9c62-42a5b53f9ce2/mbid-5e83ea65-df0b-431a-9c62-42a5b53f9ce2-8213237332_thumb500.jpg",
      },
      {
        album: "Beacons of Ancestorship",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-4c9af899-1081-3b40-81ef-5192c94a54aa/mbid-4c9af899-1081-3b40-81ef-5192c94a54aa-17634987002_thumb500.jpg",
      },
      {
        album: "The Catastrophist",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-75ea5bd3-fadb-4d57-90a0-4dac0b9b34cf/mbid-75ea5bd3-fadb-4d57-90a0-4dac0b9b34cf-12085591953_thumb500.jpg",
      },
    ],
  },
  {
    artist: "Antibalas",
    recordings: [
      {
        album: "Security",
        credits: "P,E,M",
        label: "Anti",
        artworkURL:
          "https://archive.org/download/mbid-512c0644-21d2-4a00-858f-8684979ce3aa/mbid-512c0644-21d2-4a00-858f-8684979ce3aa-6108536751_thumb500.jpg",
      },
    ],
  },
  {
    artist: "The Fiery Furnaces",
    recordings: [
      {
        album: "Widow City",
        credits: "M",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-cfa71fc5-a0d5-489e-878c-9909480adbdd/mbid-cfa71fc5-a0d5-489e-878c-9909480adbdd-5270914126_thumb500.jpg",
      },
    ],
  },
  {
    artist: "The Sea and Cake",
    recordings: [
      {
        album: "The Sea and Cake",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-c80b25e2-eda0-4e70-ad09-5d6ddb1833c9/mbid-c80b25e2-eda0-4e70-ad09-5d6ddb1833c9-16155758945_thumb500.jpg",
        year: "1994",
      },
      {
        album: "Nassau",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-a50f11bd-2814-4b38-ae30-a7a9dc7db6d9/mbid-a50f11bd-2814-4b38-ae30-a7a9dc7db6d9-21912350083_thumb500.jpg",
        year: "1995",
      },
      {
        album: "The Biz",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Thebiz.jpg",
        year: "1995",
      },
      {
        album: "The Fawn",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-188af4a7-f6db-3dba-93d7-0ae790587dab/mbid-188af4a7-f6db-3dba-93d7-0ae790587dab-21589604932_thumb500.jpg",
        year: "1997",
      },
      {
        album: "Oui",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-d4121281-c4ff-3381-b151-61d009bf14e5/mbid-d4121281-c4ff-3381-b151-61d009bf14e5-28326516752_thumb500.jpg",
        year: "2000",
      },
      {
        album: "One Bedroom",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "http://thrilljockey.com/spree/products/571/product/116_1459scan.jpg?1442283699",
        year: "2003",
      },
      {
        album: "Everybody",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL: "https://f4.bcbits.com/img/a3705803830_10.jpg",
        year: "2007",
      },
      {
        album: "Car Alarm",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL: "https://f4.bcbits.com/img/a3372315658_10.jpg",
        year: "2008",
      },
      {
        album: "Runner",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL: "https://f4.bcbits.com/img/a4180408503_10.jpg",
        year: "2012",
      },
      {
        album: "Any Day",
        credits: "P,E,M,Mu",
        label: "Thrill Jockey",
        artworkURL:
          "https://archive.org/download/mbid-e0e4af7e-4d3a-4825-94e7-989f03a13e98/mbid-e0e4af7e-4d3a-4825-94e7-989f03a13e98-18895954980_thumb500.jpg",
        year: "2018",
      },
    ],
  },

  {
    artist: "",
    recordings: [
      {
        album: "",
        credits: "P,E,M,Mu",
        label: "",
        artworkURL: "",
      },
    ],
  },
];

export default albumData;
