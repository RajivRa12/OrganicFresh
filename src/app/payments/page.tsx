import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const payments = [
  { id: "PAY728ed52f", amount: "₹12,500.00", crop: "Tomato", status: "Completed", date: "2023-10-01" },
  { id: "PAYa1b2c3d4", amount: "₹8,200.00", crop: "Onion", status: "Completed", date: "2023-09-15" },
  { id: "PAYe5f6g7h8", amount: "₹21,000.00", crop: "Potato", status: "Pending", date: "2023-10-05" },
  { id: "PAYi9j0k1l2", amount: "₹5,400.00", crop: "Chilli", status: "Completed", date: "2023-08-22" },
];

export default function PaymentsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold font-headline">Payments</h1>
        <p className="text-muted-foreground">
          View your transaction history.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Here are your recent payments from AgriConnect.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Crop</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.date}</TableCell>
                  <TableCell>{payment.crop}</TableCell>
                  <TableCell className="text-right">{payment.amount}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={payment.status === "Completed" ? "default" : "secondary"} className={payment.status === "Completed" ? "bg-primary text-primary-foreground" : ""}>
                        {payment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
