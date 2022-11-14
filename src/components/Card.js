import React from 'react';
import styled from 'styled-components';
import ProgressBar from './Progress';

const Card = () => {
const Button = styled.button`
border-radius: 10px;
background-color: #F0FFFF;
font-weight: bolder;
border-style: none;
margin: 1rem;
height: 3rem;
border: 1px solid #1E90FF;
&:hover {
  color: #696969;
  border: 1px solid #4682B4;
  background-color: #fff;
}
`;

const Card = styled.div`
  border: 1px solid #fff;
    border-radius: 10px;
    /* border-color: #fff; */
    border-bottom: 1px solid #4B0082;
    background-color: #fff;
    /* filter: drop-shadow(5px 10px 0.5rem rgb(105 105 105)); */
    padding: 1rem;
    margin: 1rem;
    &:hover {
      border: 1px solid #4B0082;
      /* background-color: rgba(106 90 205 0.1); */
      /* background-color: #E6E6FA; */
    }
  `;
  const CardTitle = styled.div`
    /* background-color: #444ddd; */
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
  `;
  const CardContent = styled.div`
    padding: 0.5rem;
  `;

  
return (

<Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
              <ProgressBar
                color={'#ff7979'}
                width={'150px'}
                value={15}
                max={100}
              />
              <Button >Добавить</Button>
              <Button >Просмотреть</Button>
            </Card>)

}
export default Card