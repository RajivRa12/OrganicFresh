import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, MapPin, Banknote, Star, Package } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  const totalStars = 5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <header className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://placehold.co/100x100.png" alt="Farmer" data-ai-hint="farmer portrait" />
          <AvatarFallback>FX</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold font-headline">Ramesh Kumar</h1>
          <p className="text-muted-foreground">Farmer ID: FX12345</p>
        </div>
      </header>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><User /> Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <span>Kolar Village, Kolar Taluk</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Banknote /> Financials</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Bank / UPI Linked:</strong> UPI ID: ramesh@okbank</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Package /> Delivery Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">Total Deliveries</p>
              <p className="text-2xl text-primary font-bold">12</p>
            </div>
            <div>
               <p className="font-semibold">Rating</p>
               <StarRating rating={4} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
