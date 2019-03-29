# Task List

[Live Link](https://nbielak.github.io/task_list/#/)

## Schema

### `Groups`
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|`id`             |integer   | not null, unique, primary
|`name`           |string    | not null, unique, idx
|`created_at`     |datetime  | not null
|`updated_at`     |datetime  | not null

* `index` on `name, unique: true`

---

### `Tasks`
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|`id`             |integer   | not null, unique, primary
|`task`           |string    | not null, unique, idx
|`group_id`       |integer   | not null, unique, idx
|`locked_status`  |boolean   | not null
|`completed_at`   |datetime  | 
|`created_at`     |datetime  | not null
|`updated_at`     |datetime  | not null

* `group_id` references `groups`
* `index` on `task, unique: true`
* `index` on `group_id, unique: true`

___

### `Dependencies`


|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|`id`             |integer   | not null, unique, primary
|`parent_id`      |integer   | not null, idx
|`child_id`       |integer   | not null, idx
|`created_at`     |datetime  | not null
|`updated_at`     |datetime  | not null

* `parent_id` references `tasks`
* `child_id` references `tasks`
* `index` on `parent_id`
* `index` on `child_id`
* `index` on `[parent_id, child_id], unique: true`

---

## Check/Uncheck API Documention

Method: `PATCH`

URL: `/api/tasks/:id`

---

### Parameters

|Param           |Data Type |Details
|----------------|:--------:|:-------------------------:|
|`id`             |integer   | numeric id of task

---

### Request

#### Headers

`Content-Type:application/json`

#### Body

```js
{
    "id": 1,
    "completedAt": "Thu Mar 28 2019 21:36:25 GMT-0700"
}
```

---

### Response: 200

#### Headers

`Content-Type:application/json`

#### Body

```js
{
    "id": 1,
    "task": "get food",
    "groupId": 1,
    "lockedStatus": false,
    "completedAt": "Thu Mar 28 2019 21:36:25 GMT-0700"
}
```

---

### Response: 401

#### Headers

`Content-Type:application/json`

#### Body

```js
{
    "error": "error.unauthorized"
}
```

