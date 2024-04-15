import { Card, CardContent, CardHeader, CardTitle } from ".."
import { SparkArea } from "../../chart/sparkarea"

type InfoCardProps = {
    title: string
    value: string
    infoText: string
    icon?: any
}
export default function InfoCard({title,value,infoText,icon}: InfoCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{infoText}</p>
        <SparkArea />
      </CardContent>
    </Card>
  )
}
