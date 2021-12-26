/**
 * We will mimic working with server that returns an array
 */

import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import { useTodo } from "./todo_hooks";

/*
const tasks = [
    { "id": 10104, "title": "title:0.7193547719438698", "description": "description:0.7402325067755231", "group": "group:test", "when": "2020-12-02T20:47:58.628000Z" },
    { "id": 10108, "title": "title:0.824672929631804", "description": "description:0.00103177017009215", "group": "group:test", "when": "2020-12-02T20:55:26.559000Z" },
    { "id": 10112, "title": "title:0.4579411370433868", "description": "description:0.6001902184924468", "group": "group:test", "when": "2020-12-02T20:57:09.100000Z" },
    { "id": 10120, "title": "title:0.8766124564414226", "description": "description:0.3741738440640603", "group": "group:test", "when": "2020-12-02T20:59:11.858000Z" },
    { "id": 10124, "title": "title:0.8054663614131061", "description": "description:0.984972064102974", "group": "group:test", "when": "2020-12-02T20:59:13.634000Z" },
    { "id": 10128, "title": "title:0.894779829398898", "description": "description:0.17931070417306172", "group": "group:test", "when": "2020-12-02T20:59:14.346000Z" },
    { "id": 10132, "title": "title:0.642546608695101", "description": "description:0.014925973265416337", "group": "group:test", "when": "2020-12-02T21:00:46.034000Z" },
    { "id": 10136, "title": "title:0.2663514797757389", "description": "description:0.34754810344613074", "group": "group:test", "when": "2020-12-02T21:00:47.698000Z" },
    { "id": 10140, "title": "title:0.5289576559640019", "description": "description:0.18755960628753332", "group": "group:45", "when": "2020-12-02T21:03:28.625000Z" },
    { "id": 10144, "title": "title:0.1332800162142469", "description": "description:0.784630038345044", "group": "group:45", "when": "2020-12-02T21:03:55.700000Z" },
    { "id": 10152, "title": "title:0.8071678305582775", "description": "description:0.44315676110173974", "group": "group:45", "when": "2020-12-02T21:04:04.917000Z" },
    { "id": 10156, "title": "title:0.3677515303003749", "description": "description:0.10685225534813703", "group": "group:45", "when": "2020-12-02T21:04:05.693000Z" },
    { "id": 10160, "title": "title:0.6179211193709766", "description": "description:0.08565013210835826", "group": "group:45", "when": "2020-12-02T21:04:06.392000Z" },
    { "id": 10164, "title": "title:0.6103322013141406", "description": "description:0.5655687796425173", "group": "group:45", "when": "2020-12-02T21:04:07.096000Z" },
    { "id": 10168, "title": "title:0.5960691110525647", "description": "description:0.1762048171009225", "group": "group:45", "when": "2020-12-02T21:04:07.814000Z" },
    { "id": 10172, "title": "title:0.7482039275524819", "description": "description:0.3030406910380381", "group": "group:45", "when": "2020-12-02T21:04:08.562000Z" },
    { "id": 9800, "title": "hello", "description": "world", "group": "test", "when": "2019-09-07T18:32:42.462000Z" },
    { "id": 9804, "title": "title 0.14978302998485016", "description": "description 0.28890961610423527", "group": "33", "when": "2019-09-21T12:30:44.174000Z" },
]
*/

export function TodoList() {

    // const [task, setTask] = useState(null)

    const [handleTodo, tasks] = useTodo();
    //const tasks = handleTodo();

    useEffect(() => {
        handleTodo();
    }, [])

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'https://nztodo.herokuapp.com/api/tasks/?format=json'
    //     }).then((response) => {
    //         setTask(response.data)
    //     }, (error) => {
    //         console.log(error);
    //     });
    // }, [])

    return (
        <ul>
            {
                tasks?.map((singleTask) => {
                    return (
                        <li key={singleTask.id}>
                            <h1>
                                {singleTask.title}
                            </h1>
                            <p>
                                {singleTask.description}
                            </p>
                        </li>
                    )
                })
            }
        </ul>
    )
}
