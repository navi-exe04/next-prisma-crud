import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

type Task = {
    id: number,
    title: string,
    description: string,
    createdAt: Date
}

export async function GET() : Promise<NextResponse> {
    const tasks : Task[] = await prisma.task.findMany();
    return NextResponse.json(tasks);
}

export function POST() : NextResponse {
    return NextResponse.json('GUARDANDO TAREAS');
}

export function PUT() : NextResponse {
    return NextResponse.json('ACTUALIZANDO TAREAS');
}

export function DELETE() : NextResponse {
    return NextResponse.json('ELIMINANDO TAREAS');
}