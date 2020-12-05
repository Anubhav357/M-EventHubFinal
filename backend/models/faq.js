const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  key: { type: Number },
  keyword: String,
  question: String,
  answer: String,
});

const QuestionSet = mongoose.model("questionSet", faqSchema);

const faqContents = [
  {
    key: 1,
    keyword: "One",
    question: "What is Event Hub ?",
    answer:
      "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
  },
  {
    key: 2,
    keyword: "Two",
    question: "What type of events are available at EventHub?",
    answer:
      "EventHub is a platform for you to find Event plans and Services provided by various Event organisers in the Market and contact them through EventHub.Therefore all types of Events that are provided by the organisers are present at the platform such as: Wedding, Birthday Celebrations, Theme Parties, Formal Events and independent services like Catering, Decoration, Music, etc.are available at EvenHub.",
  },
  {
    key: 3,
    keyword: "Three",
    question: "How are different Event plans Rated?",
    answer:
      "Rating of any Service or Event plan at EventHub is calculated solely by consumer feedback only. It is the average of the ratings given by every consumer that has booked that service or Event Plan.",
  },
  {
    key: 4,
    keyword: "Four",
    question: "Is EventHub safe for payments and such transactions ?",
    answer:
      "EventHub is just a platform for the customers to compare and choose from various organisers. The final booking and payments are done at the respective websites of the organisers.",
  },
  {
    key: 5,
    keyword: "Five",
    question: "Do I need to login to browse and use EventHub ?",
    answer:
      "No, the login option is just for the users to keep track of their activity on the platform and to better communicate with the other party.",
  },
  {
    key: 6,
    keyword: "Six",
    question: "Is EventHub free to use ?",
    answer:
      "Yes, you can browse and compare the services offered by various organisers free of any cost on EventHub. ",
  },
  {
    key: 7,
    keyword: "Seven",
    question: "How to contact us?",
    answer:
      "You can email us at eventhub_help@gmail.com or call us at 9971539668.",
  },
  {
    key: 8,
    keyword: "Eight",
    question: "How do I add an FAQ ?",
    answer:
      " If you're unable to find your answers in here, you can mail us your question at eventhub_help@gamil.com ",
  },
];

QuestionSet.find(function(err,ques){ 
  if(ques.length===0){
    QuestionSet.insertMany(faqContents).catch(function (error) {
      console.log(error);
    });  
  }
});


module.exports = QuestionSet;
