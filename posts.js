const fs = require('fs').promises;
const axios = require('axios');

async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    const postsData = JSON.stringify(response.data, null, 2);

    await fs.writeFile('posts.txt', postsData);

    console.log('Posts saved!');

    const fileContent = await fs.readFile('posts.txt', 'utf8');

    console.log(fileContent);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

getPosts();