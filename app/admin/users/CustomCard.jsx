import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const CustomCard =({title,nbr ,className}) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0" className="bg-[#015f6c] text-white font-bold">
    <CardHeader className=" pb-2">
      <CardTitle className="text-2xl text-center ">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-center">{nbr}</div>
    </CardContent>
  </Card>
  )
}

export default CustomCard
