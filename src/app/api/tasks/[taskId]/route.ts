import { NextResponse } from "next/server";

type props = {
    params: {
        taskId: number
    }
}

export function GET() : NextResponse {
    return NextResponse.json('OBTENIENDO TAREA');
}

export function PUT() : NextResponse {
    return NextResponse.json('ACTUALIZANDO TAREA');
}

export function DELETE() : NextResponse {
    return NextResponse.json('ELIMINANDO TAREA');
}