import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Item = () => {
    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
          const response = await axios.get('https://fakestoreapi.com/products');
          const data = await response.data;
          return data;
        }
      })
    
      if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
      if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)
      
      return (
        <div>
        <h1>Home</h1>
        { postQuery.data.map( (item) => ( <p key={item.id}>{item.title}</p>)) }
      </div>
      )
}

export default Item






// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'

// // Create a client
// const queryClient = new QueryClient()

// function App() {
//   return (
//     // Provide the client to your App
//     <QueryClientProvider client={queryClient}>
//       <Todos />
//     </QueryClientProvider>
//   )
// }

// function Todos() {
//   // Access the client
//   const queryClient = useQueryClient()

//   // Queries
//   const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

//   // Mutations
//   const mutation = useMutation({
//     mutationFn: postTodo,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['todos'] })
//     },
//   })

//   return (
//     <div>
//       <ul>
//         {query.data?.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//           mutation.mutate({
//             id: Date.now(),
//             title: 'Do Laundry',
//           })
//         }}
//       >
//         Add Todo
//       </button>
//     </div>
//   )
// }

// render(<App />, document.getElementById('root'))