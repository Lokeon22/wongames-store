const orders = [
  {
    id: "1",
    paymentInfo: {
      flag: "mastercard",
      img: "../img/flag.svg",
      number: "**** **** **** 4242",
      purchaseDate: "Purchase made on Apr 14, 2021"
    },
    games: [
      {
        id: "1",
        title: "Read Dead",
        downloadLink:
          "https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf",
        img: "../img/red-dead.png",
        price: "199.00"
      }
    ]
  },
  {
    id: "2",
    paymentInfo: {
      flag: "mastercard",
      img: "../img/flag.svg",
      number: "**** **** **** 4444",
      purchaseDate: "Purchase made on Apr 14, 2021"
    },
    games: [
      {
        id: "2",
        title: "Read Dead",
        downloadLink:
          "https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf",
        img: "../img/red-dead.png",
        price: "150.00"
      }
    ]
  }
]

export default orders
