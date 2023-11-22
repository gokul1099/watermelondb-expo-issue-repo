import { appSchema, tableSchema } from "@nozbe/watermelondb";

export enum TableName {
    CHAT_LIST = "chat_list",
    MESSAGES = "messages"
}

export const Schema = appSchema({
    version: 2,
    tables: [
        tableSchema({
            name: TableName.CHAT_LIST,
            columns: [
                // { name: "id", type: "number" },
                { name: "title", type: "string" },
                { name: 'tags', type: "string", isOptional: true },
                // { name: 'chat_id', type: "number", isIndexed: true },
                { name: "created_at", type: "number" },
                { name: "updated_at", type: "number" }
            ]
        })
    ]
})