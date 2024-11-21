// JSX = JavaScript + XML
import { Post } from "./Post" // As "{}" são usadas para importar Named Exports. Se fosse um Default Export, não precisaria das "{}".

export function App() {
  return (
    <div>
      <Post author="Samuel Cardoso da Silva" content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus accusantium quisquam consectetur hic autem quo ab tempora ipsum. Ipsa perspiciatis nostrum harum facere sint molestiae voluptatum quia eligendi odit ducimus!"/>
      <Post author="Diego Fernandes" 
      content="Um novo post muito legal!"
      />
    </div>
  )
}