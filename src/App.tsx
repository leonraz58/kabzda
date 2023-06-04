import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordeon } from './components/Accordeon/Accordeon';
import { Rating } from './components/Rating/Rating';



function App() {
  console.log('App is rendering');
  return (
    <div>
      <Pagetitle title="This is an App component"/>
      <Rating value = {0}/>
      <Accordeon titleValue="qqqqq"/>
      <Rating value = {1}/>
      <Rating value = {2}/>
      <Rating value = {3}/>
      <Rating value = {4}/>
      <Rating value = {5}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
}

function Pagetitle (props: PageTitlePropsType) {
  console.log("Pagetitle is rendering");
  return <h1>{props.title}</h1>
}



export default App;



