import { BackButton } from "@/components/utils/BackButton";
import { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full border-b border-border/20">
        <div className="m-auto max-w-3xl px-4 py-1">
          <BackButton variant="ghost" size="sm">
            Back
          </BackButton>
        </div>
      </div>
      {children}
    </>
  );
}
