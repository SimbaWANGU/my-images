const generateImage = async (prompt: string, number: number): Promise<any> => {
  let data
  const response = await fetch('https://my-images.onrender.com/image/create', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `prompt=${prompt}&num_images=${number}`
  })
  switch (response.status) {
    case 200:
    case 201:
      data = await response.json()
      return data

    case 400:
    case 500:
      data = await response.json()
      console.log(data.error)
      break
  }
}

export { generateImage }