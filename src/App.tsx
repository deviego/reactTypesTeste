import { useState } from 'react'
import ListItem from './components/ListItems'
import { Paragraph, Title } from './components/Title'



function App() {
  const items = [
    {
      id:1,
      name:"diego"
    },
    {
      id:2, 
      name:"paulo"
    },
    {
      id:3,
      name:"tatiana"
    }
  ]

  return (
    <div className="App">
     <Paragraph size='small' color="blue">
      <span> Eu sou um pragrafo</span>
     </Paragraph>
      <Title> 
        <span> Hello Words</span>
      </Title>

      <ListItem items={items} render ={(item, index) => {
        if(item.id== 1) {
          return <p>{item.name}</p>
        }
        return <h3> {item.name}</h3>
      }}></ListItem>
      </div>
  )


}

export default App
