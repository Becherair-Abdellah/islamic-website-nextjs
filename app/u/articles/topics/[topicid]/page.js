import ArticleCard from "@/components/ArticleCard";
import GetFatwa from "@/components/GetFatwa";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ArticleCard
        title="مقالة مثيرة للاهتمام"
        description="هذه المقالة تستعرض موضوعًا مثيرًا جدًا مع معلومات مفيدة ومثيرة للتفكير."
        tags={["تكنولوجيا", "تطوير", "مقالات"]}
        publicationDate="2024-08-22"
        imageUrl="/next.bmp"
      />
    </div>
  );
};

export default page;
