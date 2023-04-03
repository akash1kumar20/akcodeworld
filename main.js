// GET REQUEST
function getTodos() {
//     axios({
//         method: 'get',
//         url: 'https://jsonplaceholder.typicode.com/todos',
//         params : {
//             _limit : 5
//         }

//     })
//     .then(resolve => showOutput(resolve))
//     .catch(reject => console.error(error))
//   
axios
.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(resolve => showOutput(resolve))
.catch(reject => console.error(reject))
}
  
  // POST REQUEST
  function addTodo() {
    axios
    .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New list',
        completed: false
    })
    .then(resolve => showOutput(resolve))
    .catch(reject => console.error(reject))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'New list added',
        completed: true
    })
    .then(resolve => showOutput(resolve))
    .catch(reject => console.error(reject))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(resolve => showOutput(resolve))
    .catch(reject => console.error(reject))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios
    .all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch(reject => console.error(reject));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: 'sometoken'
        }
    };
    axios
    .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New list',
        completed: false
    },config
    )
    .then(resolve => showOutput(resolve))
    .catch(reject => console.error(reject))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    };
    axios(options).then(resolve => showOutput(resolve));
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(
    config => {
        console.log(
            `${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`
        );

        return config;
    },
    error => {
        return Promise.reject(error);
    }
  );
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners 
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
