"use client";
import { useParams } from "next/navigation";

export default function Member() {
  const { id } = useParams();
  return <div>{id}</div>;
}
