import { createClient } from "redis";

const client = createClient()

async function main(): Promise<void> {
    await client.connect();
    while (true) {
        const response = await client.brPop('submission', 0)
        console.log('the pop is done ', response)
    }
}

main()