// const heading = React.createElement('h1',{id:'heading'},'hello world from react!')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)


const parent = React.createElement('div',{id:'parent'},[
  React.createElement('div',{id:'child1'},[React.createElement('h1',{id:'heading'},'hello world from react!'),React.createElement('h2',{id:'heading'},'hello world from rezin!')]),
React.createElement('div',{id:'child2'},[React.createElement('h1',{id:'heading'},'hello world from react!'),React.createElement('h2',{id:'heading'},'hello world from rezin!')])
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)