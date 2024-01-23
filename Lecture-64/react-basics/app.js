//DOM =>operationally heavy

// let root = document.getElementById('root');

// let h1 = document.createElement('h1')
// h1.innerText='hello world'
// root.appendChild(h1)


// -----------------------
// we will use react

// React=>virtual dom =>  effective

// let rootEl = document.getElementById('root')
// let h1 = React.createElement('h1',
// {id:'sam',className:'vohra'},
// 'hello from react');
// let h2 = React.createElement('h1',
// null,
// 'h2');
// // ReactDOM.render(h1,rootEl) //not used in react 18

// let root = ReactDOM.createRoot(rootEl)
// root.render(h1);


// -----------------------------
// let rootEl = document.getElementById('root')
// let h1 = React.createElement('h1',
// {id:'sam',className:'vohra'},
// 'hello from react');
// let h2 = React.createElement('h1',
// null,
// 'h2');
// // ReactDOM.render(h1,rootEl) //not used in react 18

// let root = ReactDOM.createRoot(rootEl)
// root.render([h1,h2]);


// ------------nesting------------
// let rootEl = document.getElementById('root')

// let div = React.createElement('div',null,[
//     React.createElement('h1',null,'hi iam div ke andar'),
//     React.createElement('h2',null,'hi iam div ke andar div')


// ])

// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div)


// ------------------------
// new way (jsx)

let div =(
    <div>
        <h1>hello h1</h1>
        <p>ok p</p>
    </div>
)
let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)