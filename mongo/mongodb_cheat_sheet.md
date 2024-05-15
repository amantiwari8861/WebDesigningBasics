# MongoDB Cheat Sheet

## Show All Databases

```
show dbs
```

## Show Current Database

```
db
```

## Create Or Switch Database

```
use acme
```

## Drop

```
db.dropDatabase()
```

## Create Collection

```
db.createCollection('posts')
```

## Show Collections

```
show collections
```

## Insert Document

```
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

## Insert Multiple Documents

```
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

## Get All Documents

```
db.posts.find()
```

## Get All Documents Formatted

```
db.posts.find().pretty()
```

## Find Documents

```
db.posts.find({ category: 'News' })
```

## Sort Documents

```
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

## Count Documents

```
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

## Limit Documents

```
db.posts.find().limit(2).pretty()
```

## Chaining

```
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

## Foreach

```
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Find One Document

```
db.posts.findOne({ category: 'News' })
```

## Find Specific Fields

```
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

## Update Document

```
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Update Specific Field

```
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

## Increment Field (\$inc)

```
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

## Rename Field

```
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

## Delete Document

```
db.posts.remove({ title: 'Post Four' })
```

## Sub-Documents

```
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Find By Element in Array (\$elemMatch)

```
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

## Add Index

```
db.posts.createIndex({ title: 'text' })
```

## Text Search

```
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Greater & Less Than

```
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```
 ## Comparison Operators:

   - `$eq`: Matches values that are equal to a specified value.
     ```
     { "age": { "$eq": 30 } }
     ```
   - `$gt`: Matches values that are greater than a specified value.

     ```
     { "age": { "$gt": 30 } }
     ```

   - `$gte`: Matches values that are greater than or equal to a specified value.

     ```
     { "age": { "$gte": 30 } }
     ```

   - `$lt`: Matches values that are less than a specified value.

     ```
     { "age": { "$lt": 30 } }
     ```

   - `$lte`: Matches values that are less than or equal to a specified value.

     ```
     { "age": { "$lte": 30 } }
     ```

   - `$ne`: Matches all values that are not equal to a specified value.

     ```
     { "age": { "$ne": 30 } }
     ```

   - `$in`: Matches any of the values specified in an array.

     ```
     { "age": { "$in": [30, 40] } }
     ```

   - `$nin`: Matches none of the values specified in an array.
     ```
     { "age": { "$nin": [30, 40] } }
     ```

## Logical Operators:

   - `$and`: Joins query clauses with a logical AND and returns all documents that match the conditions of both clauses.

     ```
     { "$and": [{ "age": { "$gt": 20 } }, { "age": { "$lt": 40 } }] }
     ```

   - `$or`: Joins query clauses with a logical OR and returns all documents that match the conditions of either clause.

     ```
     { "$or": [{ "age": { "$lt": 20 } }, { "age": { "$gt": 40 } }] }
     ```

   - `$not`: Inverts the effect of a query expression and returns documents that do not match the query expression.

     ```
     { "age": { "$not": { "$gt": 30 } } }
     ```

   - `$nor`: Joins query clauses with a logical NOR and returns all documents that fail to match both clauses.
     ```
     { "$nor": [{ "age": { "$lt": 20 } }, { "age": { "$gt": 40 } }] }
     ```

## Element Operators:

   - `$exists`: Matches documents that have the specified field.

     ```
     { "age": { "$exists": true } }
     ```

   - `$type`: Selects documents if a field is of the specified type.
     ```
     { "age": { "$type": "number" } }
     ```

## Evaluation Operators:

   - `$expr`: Allows the use of aggregation expressions within the query language.

     ```
     { "$expr": { "$gt": ["$qty", "$inStock"] } }
     ```

   - `$Schema`: Validate documents against the given Schema.
     ```
     { "$Schema": { "required": ["name", "email"] } }
     ```

## Array Operators:

   - `$all`: Matches arrays that contain all elements specified in the query.

     ```
     { "tags": { "$all": ["mongodb", "database"] } }
     ```

   - `$elemMatch`: Selects documents if the array field contains an element that matches all the specified query criteria.

     ```
     { "students": { "$elemMatch": { "name": "Alice", "grade": { "$gte": 80 } } } }
     ```

   - `$size`: Selects documents if the array field is a specified size.
     ```
     { "comments": { "$size": 5 } }
     ```

## Projection Operators:

   - `$`: Projects the first element in an array that matches the query condition.

     ```
     { "scores": { "$elemMatch": { "$gt": 80 } } }
     ```

   - `$elemMatch`: Projects the first element in an array that matches the specified condition.

     ```
     { "students": { "$elemMatch": { "grade": { "$gt": 90 } } } }
     ```

   - `$meta`: Projects metadata such as the score of a document in a text search.
     ```
     { "score": { "$meta": "textScore" } }
     ```

## Update Operators:

   - `$set`: Sets the value of a field in a document.

     ```
     { "$set": { "status": "active" } }
     ```

   - `$unset`: Removes the specified field from a document.

     ```
     { "$unset": { "status": "" } }
     ```

   - `$inc`: Increments the value of a field in a document.

     ```
     { "$inc": { "quantity": 10 } }
     ```

   - `$mul`: Multiplies the value of a field in a document.
     ```
     { "$mul": { "price": 1.1 } }
     ```
   - `$rename`: Renames a field in a document.

     ```
     { "$rename": { "oldName": "newName" } }
     ```

  - `$min`: Only updates the field if the specified value is less than the existing field value.

    ```
    { "$min": { "price": 100 } }
    ```

  - `$max`: Only updates the field if the specified value is greater than the existing field value.

    ```
    { "$max": { "price": 200 } }
    ```

  - `$currentDate`: Sets the value of a field to the current date or time.
    ```
    { "$currentDate": { "lastModified": true } }
    ```

## Array Update Operators:

   - `$`: Acts as a placeholder to update the first element that matches the query condition in an array.

     ```
     { "$[elem]": { "score": { "$gt": 80 } } }
     ```

   - `$[]`: Updates all elements in an array.

     ```
     { "$[]": { "status": "done" } }
     ```

   - `$[<identifier>]`: Acts as a placeholder to update all elements that match the arrayFilters condition in an array.
     ```
     { "$[elem]": { "score": { "$gt": 80 } } }
     ```
