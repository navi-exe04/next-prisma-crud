import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

type Task = {
    id?: number
    title: string,
    description: string,
    createdAt?: Date
}

export async function GET() : Promise<NextResponse> {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
}

export async function POST(request : Request) : Promise<NextResponse> {
    const {title, description} = await request.json();
    const newTask = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    return NextResponse.json(newTask);
}

// export function PUT() : NextResponse {
//     return NextResponse.json('ACTUALIZANDO TAREAS');
// }

// export function DELETE() : NextResponse {
//     return NextResponse.json('ELIMINANDO TAREAS');
// }