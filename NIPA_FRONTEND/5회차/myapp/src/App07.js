import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
//이미지가 변하기 때문에 상태변수로 설정, 갱신하기 위해 setImage
  const [image, setImage] =  useState(undefined)

  // 처음부터 강아지가 표시되게끔 하고 싶다면 이렇게 
  useEffect(() => {
    //axios.get: axios를 이용해서 강아지 사진 get요청을 하겠다 -> promise 반환: 강아지 사진. 
    axios.get("https://dog.ceo/api/breeds/image/random")
    //then: 요청이 정상적으로 처리됐을 때 처리 방법을 정의
    //result안의 message: 실제 강아지 사진 
    //catch: 실패했을 경우 처리 방법 정의

    .then(result => setImage(result.data.message))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <button onClick={() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(result => setImage(result.data.message))
        .catch(error => console.log(error))
      }}>강아지 사진 변경하기</button> <br />
       <button onClick={
        async () => {
        try{
          const response = await axios.get("https://dog.ceo/api/breeds/image/random")
          setImage(response.data.message)
        }catch(error){
          console.log(error)
        }
      }}>강아지 사진 변경하기</button> <br />
      
      <img src={image} alt="랜덤 강아지 이미지" width="640" />
    </>
  );
}

export default App