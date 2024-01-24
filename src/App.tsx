import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import DomRef from "./Components/ref/DomRef";
import MutableRef from "./Components/ref/MutableRef";
import { Counter } from "./Components/class/Counter";
import Private from "./Components/auth/Private";
import Profile from "./Components/auth/Profile";
import List from "./Components/generics/List";
import ProductList from "./Components/ProductList";
import Category from "./Components/Categories/Category";
import CategoryList from "./Components/Categories/CategoryList";
import Hero from "./Components/Hero";
import HeadlineCards from "./HeadlineCards";
import Layout from "./Components/Layout/Layout";
import Container from "./Components/Container";
import LoggedIn from "./Components/state/LoggedIn";
import User from "./Components/state/User";
import CounterReducer from "./Components/state/CounterReducer";
import { Box } from "./Components/context/Box";
import { ThemeContentxProvider } from "./Components/context/ThemeContext";
import { UserContextProvider } from "./Components/context/UserContext";
import DBUser from "./Components/context/DBUser";
import Newsletter from "./Components/Newsletter";

function App() {
  const person = {
    first: "Kanakaraju",
    last: "Gandreddi",
  };
  const categories = [
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
  ];

  const nameList = [
    {
      first: "Raju",
      last: "Gandreddi",
    },
    {
      first: "Prasad",
      last: "Gandreddi",
    },
    {
      first: "Hemu",
      last: "Gandreddi",
    },
    {
      first: "Lakshay",
      last: "Gandreddi",
    },
  ];
  return (
    <div className="App">
      {/* <Hero />
      <HeadlineCards /> */}
      {/* <Greet name="RAJU" messageCount={10} isLoggedIn={true} />
      <Person name={person} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading> Place holder text</Heading>

      <Oscar>
        <Heading>Oscar linaprio!</Heading>
      </Oscar>
      <Greet name="RAJU" isLoggedIn={true} />

      <Button handleClick={(event, id) => {
        console.log('Button clicked ', event, id)
      }} />

      <Input value="" handleChange={(event) => console.log(event)} />

      <DomRef />
      <MutableRef />

      <Counter message="Hello" />

      <Private isLoggedIn = {true} component={Profile}/> 
      */}

      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> 
      */}

      {/* <ProductList products={[
        {id: 100, name: 'iPhone 5', makeYear: '2022', make: 'Apple'},
        {id: 102, name: 'Galaxy M53', makeYear: '2032', make: 'Samsung'},
        {id: 103, name: 'iPhone X', makeYear: '2012', make: 'Apple'},
        {id: 104, name: 'iPhone 5', makeYear: '2022', make: 'Apple'},
        {id: 105, name: 'Pixel5', makeYear: '2023', make: 'Google'},
        ]} />


        <CategoryList categorylist={categories} />
         */}

      {/* <Layout /> */}

      {/* <div style={{'backgroundColor': 'blue', 'display':'flex', 'justifyContent':'center', 'padding':'0px', 'height':'100vh', 'alignItems':'center'}}>
         <Container styles={{ 'fontSize': '20px','width': '250px','backgroundColor': 'red', 'color':'white', 'padding':'10px','borderRadius': '30px', 'fontFamily':'sans-serif'}}/>
         </div> */}

      {/* <LoggedIn /> */}

      {/* <User /> */}

      {/* <CounterReducer /> */}

      {/* <ThemeContentxProvider>
        <Box />
      </ThemeContentxProvider> */}

      {/* <UserContextProvider>
        <DBUser />
      </UserContextProvider> */}

      <Newsletter />
    </div>



  );
}

export default App;
