function randomVoteCount() {
    return Math.floor(Math.random() * 100);
}

  const products = [
    {
      id: 1,
      title: "Independent Woman",
      description: "By Clyde Stevenson",
      url: "#",
      votes: randomVoteCount(),
      submitterAvatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMURcd3tEdfd_i4VofZMb2r9qDP8EK6gJ0MQ&usqp=CAU",
      productImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzE57C_iTZ_Qu7D1xD4Fc1RIkyA85VAV0Dg&usqp=CAU",
    },

    {
      id: 2,
      title: "The Way of the Nameless",
      description: " By Graham Douglass.",
      url: "#",
      votes: randomVoteCount(),
      submitterAvatarUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51xlIUEetuL.jpg",
      productImageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051",
    },

    {
      id: 3,
      title: "The Silent Patient",
      description: "By Alex Michaelides",
      url: "#",
      votes: randomVoteCount(),
      submitterAvatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr9BQiHvodIGPgjlw83mq0UIsjysq2xmJlQ&usqp=CAU",
      productImageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582759969i/40097951.jpg",
    },

    {
      id: 4,
      title: "A History of Wild Places",
      description: "By Shea Ernshaw",
      url: "#",
      votes: randomVoteCount(),
      submitterAvatarUrl:
        "https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg",
      productImageUrl:
        "https://s26162.pcdn.co/wp-content/uploads/2021/11/81CLmdY62XL.jpg",
    },
  ];
  
  export default products;
  