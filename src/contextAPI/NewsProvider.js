import { createContext } from "react";

const initialState = {
  home: [],
  bollywood: [
    {
      id: "bw4pid30ff84",
      img1: "https://www.themoviedb.org/t/p/w235_and_h235_face/36kNTfOAqJhom14fEoU56cPrhF6.jpg",
      Heading1: "Ranvir Kapur is felling happy",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw5pid30ff84",
      img1: "https://img.indiaforums.com/media/640x0/50/0732-anushka-sharma-karnesh-sharma.jpg",
      Heading1: "Anushaka Sharma is with her friend",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw6pid30ff84",
      img1: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Sonam-Kapoor-attends-Cond%C3%A9-Nast-Traveller-India-event.jpg",
      Heading1: "Sonam Kapur lates news",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw7pid30ff84",

      img1: "https://upload.wikimedia.org/wikipedia/commons/2/27/Kanika_Kapoor_launches_%22Teddy_Bear%22.jpg",
      Heading1: "Kanika Kanpoor tries to explore her beauty",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw8pid30ff84",

      img1: "https://images.indianexpress.com/2021/04/akshay-kumar-1200.jpg",
      Heading1: "Akshay Kumar is a good actor in latest time",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw9pid30ff84",

      img1: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/6/14/original/Ravi.jpg",
      Heading1: "Ravi Teja is looking handsome",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw10pid30ff84",

      img1: "https://images.hindustantimes.com/img/2022/06/23/1600x900/katrina-kaif-vicky-kaushal-1-165189741416x9_1655970452826_1655970461422.webp",
      Heading1:
        "Vicky Kaushal is just trying to raise the temperature of swimming pool",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  hollywood: [
    {
      id: "hw4pid30ff84",
      img1: "https://nationaltoday.com/wp-content/uploads/2022/06/3-Tom-Cruise.jpg",
      Heading1: "Tom Cruise",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw5pid30ff84",
      img1: "https://cdn.britannica.com/41/132241-050-4B93B096/Tom-Hanks-Charlie-Wilsons-War.jpg",
      Heading1: "Tom Hanks",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw6pid30ff84",
      img1: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg",
      Heading1: "Brad Pitt",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw7pid30ff84",
      img1: "https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1300&quality=85&fit=max&s=88326033bd7ab5ad872be27861aab2a3",
      Heading1: "Johnny Depp",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw8pid30ff84",
      img1: "https://img.buzzfeed.com/buzzfeed-static/static/2021-10/14/15/campaign_images/5fadbac4c9f3/ben-affleck-and-matt-damon-explained-how-writing--2-570-1634225522-4_dblbig.jpg?resize=1200:*",
      Heading1: "Matt Damon",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw9pid30ff84",
      img1: "https://media.vanityfair.com/photos/618c0614fdf674f0522a9fb7/master/pass/LBY_210805_JENNIFER_LAWRENCE_VF_09G_Shot_10_028_QC_sRGB_LR.jpg",
      Heading1: "Jennifer Lawrence",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw10pid30ff84",
      img1: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2012/12/kristen_stewart.jpg",
      Heading1: "Kristen Stewart",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  technology: [
    {
      id: "th1pid30ff84",
      img1: "https://assets.thehansindia.com/h-upload/2021/07/28/1091969-ltec.webp",
      Heading1: "Blog Chain",
      Heading2:
        "A blockchain is a distributed database  that is shared among the network",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.",
      date1: "/ August 19 2017",
    },
    {
      id: "th2pid30ff84",
      img1: "https://pbs.twimg.com/card_img/1563691932173611008/DvNnDUEz?format=png&name=medium",
      Heading1: "Reactjs",
      Heading2:
        "React is a declarative, efficient, and flexible JavaScript library",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.React has a few different kinds of components, but we’ll start with React.Component subclasses:",
      date1: "/ August 19 2017",
    },
    {
      id: "th3pid30ff84",
      img1: "https://redux.js.org/img/redux-logo-landscape.png",
      Heading1: "Redux",
      Heading2: "Redux is a predictable state container for JavaScript apps.",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
      date1: "/ August 19 2017",
    },
    {
      id: "th83pid30ff84",
      img1: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
      Heading1: "C++",
      Heading2: "Redux is a predictable state container for JavaScript apps.",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
      date1: "/ August 19 2017",
    },
    {
      id: "th98pid30ff84",
      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      Heading1: "Node Js",
      Heading2: "Redux is a predictable state container for JavaScript apps.",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
      date1: "/ August 19 2017",
    },
    {
      id: "th96pid30ff84",
      img1: "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70",
      Heading1: "JAVA",
      Heading2: "Redux is a predictable state container for JavaScript apps.",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
      date1: "/ August 19 2017",
    },
    {
      id: "th946pid30ff84",
      img1: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
      Heading1: "Block Chain",
      Heading2: "Redux is a predictable state container for JavaScript apps.",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
      subh1: "Travel",
      blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
      date1: "/ August 19 2017",
    },
  ],
  food: [
    {
      id: "fod4pid30ff84",
      img1: "https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg",
      Heading1: "Rice",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod5pid30ff84",
      img1: "https://img.krishijagran.com/media/67402/rfg.jpg",
      Heading1: "Wheat",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod6pid30ff84",
      img1: "https://www.jiomart.com/images/product/600x600/490000363/maggi-2-minute-masala-instant-noodles-70-g-product-images-o490000363-p490000363-0-202203150701.jpg",
      Heading1: "Maggi",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod7pid30ff84",

      img1: "https://www.subbuskitchen.com/wp-content/uploads/2014/01/Veg-Noodles.jpg",
      Heading1: "noodles",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod8pid30ff84",

      img1: "https://5.imimg.com/data5/SELLER/Default/2020/9/EK/SI/MI/111137174/dry-fruits-1000x1000.jpg",
      Heading1: "Dry Fruits",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod9pid30ff84",

      img1: "https://sukhis.com/app/uploads/2022/04/image3-4.jpg",
      Heading1: "South Indian Foods",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod10pid30ff84",

      img1: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      Heading1: "Fruits",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  fitness: [
    {
      id: "ft4pid30ff84",
      img1: "https://m.economictimes.com/thumb/msid-85206159,width-1200,height-900,resizemode-4,imgsize-81692/fitness.jpg",
      Heading1: "Fitness is good for health",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft5pid30ff84",
      img1: "https://i.insider.com/5b0601b71ae6621c008b4aa2?width=1136&format=jpeg",
      Heading1: "Running",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft6pid30ff84",
      img1: "https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg",
      Heading1: "Swimming",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft7pid30ff84",
      img1: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg",
      Heading1: "BasketBall",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft8pid30ff84",
      img1: "https://images.news18.com/ibnlive/uploads/2022/03/yoga-3-16484555003x2.jpg?impolicy=website&width=510&height=356",
      Heading1: "Yoga",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft9pid30ff84",

      img1: "https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327086/a-woman-doing-the-bow-yoga-pose.jpg",
      Heading1: "Yoga is good for health",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft10pid30ff84",
      img1: "https://www.mapsofindia.com/ci-moi-images/my-india/2013/04/importance-of-meditation.jpg",
      Heading1: "Medition is good for health",
      sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
};

export const NewsContext = createContext(initialState);

const NewsProvider = ({ children }) => {
  return (
    <NewsContext.Provider value={initialState}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
