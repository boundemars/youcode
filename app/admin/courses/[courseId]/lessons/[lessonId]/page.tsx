import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRequiredAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { LessonDetail } from "./form/LessonDetailsForm";

export default async function LessonPage({
  params,
}: {
  params: {
    lessonId: string;
  };
}) {
  const session = await getRequiredAuthSession();

  const lesson = await prisma.lesson.findUnique({
    where: {
      id: params.lessonId,
      course: {
        creatorId: session.user.id,
      },
    },
  });

  if (!lesson) {
    notFound();
  }

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>{lesson.name}</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <LessonDetail defaultValue={lesson} />
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
