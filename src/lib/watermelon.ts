import { Database } from "@nozbe/watermelondb"
import SQLIiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import { Schema } from "../model/noteSchema";
import { ChatList } from "../model/noteModel";

const adapter = new SQLIiteAdapter({
    schema: Schema,
    jsi: true,
    onSetUpError: error => {
        console.log(error)
    }
})


export const database = new Database({
    adapter,
    modelClasses: [ChatList]
})

