const DOMAIN = 'https://cros-anywhere.tastedive.com/'
const KEY = '378732-Sebastia-0KJQN855'
const BASE_URL = `${DOMAIN}api/similar?k=${KEY}`

async function getMusic() {
 
  try {
    const response = await axios.get(BASE_URL)
    console.log(response)
  } catch (error) {
    console.log(`This is an error : ${error}`)
  }
}getMusic()