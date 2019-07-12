import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Grid from 'react-bootstrap/Grid'
import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <SayFullName name="Константин" surname="Сивостров" link="vk.com" />
          <SayFullName name="Анна" surname="Карпова" link="ok.com" />
          <SayFullName name="Марина" surname="Сивострова" link="facebook.com" />
      </div>
    )
  }
}


function SayFullName(props) {
  return (
      <>
      <h1>Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
      </>
  )
}


export default App;
