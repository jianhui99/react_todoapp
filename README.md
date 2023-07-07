## todoList case related knowledge
1. Dynamic initialization list, how to determine which component's state to put the data in?
     - A component uses: put it in its own state
     - Some components use: placed in their common parent component state (state promotion)
2. How to pass data between parent and child component?
     1. Parent component -> child component: passed through props
     2. Child component -> parent component: passed through props, requiring the parent component to pass a function to the child component in advance
3. Where the state is, there is the method to operate the state