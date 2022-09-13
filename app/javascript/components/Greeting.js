import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from '../store/greetings/greetingStore';
import { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const handleClick = () => {
    dispatch(fetchGreeting());
  }

  const data = useSelector((state) => state).greeting;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>handleClick()}>Greet</button>
    </div>
  );
};

export default Greeting;