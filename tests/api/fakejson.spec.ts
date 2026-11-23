import {test,expect} from "@playwright/test"


test( "GET API REQEST", async ({request}) =>{

    const response = await request.get("https://jsonplaceholder.typicode.com/users/1")

expect(response.status()).toBe(200)

const data = await response.json()

expect(data.id).toBe(1)
expect(data.name).toBeTruthy();


console.log(data)

})

