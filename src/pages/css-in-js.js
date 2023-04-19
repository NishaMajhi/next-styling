import styled from 'styled-components'

const Title = styled.h4`
   font-size:100px;
   background-color:black;
   color:red;
  `

const h = styled.h1`
   color:red;
   fonst-size:5000px;
`
export default function CSSJS() {
   return (
      <>
         <Title>Style Title</Title>
         <h>Hello</h>
      </>

   )
}


// color : ${({theme}) => theme.colors.primary}; 