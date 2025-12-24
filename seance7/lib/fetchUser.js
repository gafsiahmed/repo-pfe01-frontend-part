export default async function fetchUser(URL) {
    // fetch API , handle Erros 
    const response = await fetch (URL)
    const data = await response.json()

    return data.results[0]
}
