import { Model, Relation } from "@nozbe/watermelondb"
import { date, lazy, text, readonly } from "@nozbe/watermelondb/decorators"

import { TableName } from "./noteSchema"


export class ChatList extends Model {
    static table = TableName.CHAT_LIST


    @readonly @date("created_at") createdAt!: Date;
    @readonly @date("updated_at") updatedAt!: Date;

    static associations = {
        [TableName.MESSAGES]: {
            type: "has_many" as const,
            foreignKey: "id" as const
        }
    }

    @text("title") title!: string
    @text("tags") tags!: string
}
