documents:defineTable({
title:v.string(),
userId:v.string(),
isArchived:v.boolean(),
parentDocument:v.optional(v.id('documents')),
content:v.optional(v.string()),
coverImage:v.optional(v.string()),
icon:v.optional(v.string()),
isPublished:v.boolean()
})

model Board {
id String @id @default(uuid())
orgId String
title String
imageId String
imageThumbUrl String @db.Text
imageFullUrl String @db.Text
imageUsername String @db.Text
imageLinkHTML String @db.Text

lists List[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model List {
id String @id @default(uuid())
title String
order Int

boardId String
board Board @relation(fields: [boardId], references: [id], onDelete: Cascade)

cards Card[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([boardId])
}

model Card {
id String @id @default(uuid())
title String
order Int
description String? @db.Text

listId String
list List @relation(fields: [listId], references: [id], onDelete: Cascade)

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([listId])
}

enum ACTION {
CREATE
UPDATE
DELETE
}

enum ENTITY_TYPE {
BOARD
LIST
CARD
}

model AuditLog {
id String @id @default(uuid())
orgId String
action ACTION
entityId String
entityType ENTITY_TYPE
entityTitle String
userId String
userImage String @db.Text
userName String @db.Text

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}
