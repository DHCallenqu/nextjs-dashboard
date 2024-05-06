import { POST } from '@/app/api/route';
import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';
export default async  function Page() {
  let url = "https://view-dev2.tkelevator.com.cn/sharp/niinspection/user/login";
  let body = JSON.stringify({ identifier: "eyJVc2VyOElEIjoiODAwMDAyNDUiLCJMYW5ndWFnZUNvZGUiOiJlbiIsIlBhc3N3b3JkIjoiNDU2cnR5JCVeUlRZIiwiQXBwVmVyc2lvbiI6IjIuMTAuNSIsIkNvdW50cnlDb2RlIjoiQ04iLCJEZXZpY2VDdXJyZW50RGF0ZSI6IjIwMjQtMDUtMDYgMTA6MTE6NDciLCJFbnZpcm9ubWVudCI6IkRFVjIiLCJEZXZpY2VJbmZvIjp7IkRldmljZXR5cGUiOiIiLCJEZXZpY2VWZXJzaW9uRnVsbCI6IiIsIkRldmljZVZlcnNpb25NYWpvciI6IiIsIkRldmljZVZlcnNpb25NaW5vciI6IiIsIkRldmljZU1vZGVsIjoiIiwiTWFudWZhY3R1cmVyIjoiIiwiQXBwVmVyc2lvbiI6IjIuMTAuNSIsIkFwcEJ1aWxkVmVyc2lvbiI6IjIxMDA1MDEiLCJEZXZpY2VJRCI6IjM1MjE3MzA2MjIxNjExMyJ9LCJCdWlsZFZlcnNpb24iOiIyMTAwNTAxIn0=" });
  const res = await POST(url,body);
    // return <p>{res.result.User8ID}</p>;
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
      </main>
    );
  }