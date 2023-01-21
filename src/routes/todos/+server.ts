import type {PageServerLoad} from './$types'
import { json, type RequestHandler } from "@sveltejs/kit";
import { addTodo, removeTodo } from '$lib/server/database';

type Data = {
    success: boolean
    errors: Record<string, string>
}

export const POST: RequestHandler = async ({request}) => {
    const formdata = await request.formData()
    const todo = String(formdata.get('todo'))

    const data: Data = {
        success:false,
        errors: {}
    }

    if(!todo){
        data.errors.todo = 'required'
        return json(data, {status: 400})
    }

    addTodo(todo)
    data.success =true
    return json(data)
}

export const DELETE: RequestHandler = async ({request}) => {
    const formData = await request.formData()
    const todoId =  Number(formData.get('id'))

    removeTodo(todoId)

    return json({success:true})
}