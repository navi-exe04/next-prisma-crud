import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

type props = {
    params: {
        taskId: number
    }
}

// type Task = {
//     id: number
//     title: string,
//     description: string,
//     createdAt: Date
// }

type TaskInfo = {
    title: string,
    description: string
}

export async function GET(request:Request, {params}:props) : Promise<NextResponse> {
    const taskId:number = Number(params.taskId);
    const task = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    });
    return NextResponse.json(task);
}

export async function PUT(request:Request, {params}:props) : Promise<NextResponse> {
    const data : TaskInfo = await request.json();
    const taskId:number = Number(params.taskId);
    const taskUpdated = await prisma.task.update({
        where: {
            id: taskId
        },
        data: data
    });
    return NextResponse.json(taskUpdated);
}

export async function DELETE(request:Request, {params}:props) : Promise<NextResponse> {
    try {
        const taskId:number = Number(params.taskId);
        const taskRemoved = await prisma.task.delete({
            where: {
                id: taskId
            }
        });
        return NextResponse.json(taskRemoved);
    } catch (error : any) {
        const error_message : string = error.message;
        return NextResponse.json(error_message)
    }
    
}