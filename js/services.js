let apiKey = ' '
const dataBaseUrl = 'https://kids-center-diploma-project-default-rtdb.europe-west1.firebasedatabase.app/comments'
 //uSE FIREBASE METHODS NOT FETCH
const shoesSurvices = {
    async add(shoeData) {
        let res = await fetch(`${dataBaseUrl}/shoes.json`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(shoeData)
        })
        let data = await res.json()
        return data
    },
    async getAll() {
        let res = await fetch(`${dataBaseUrl}/shoes.json`)
        let data = await res.json()
        if (!data) {
            return {}
        }
        return Object.keys(data).map(key => ({ key, ...data[key] }))

    },
    async getOne(id) {
        let res = await fetch(`${dataBaseUrl}/shoes/${id}.json`)
        let data = await res.json()
        return data
    },
     
}

