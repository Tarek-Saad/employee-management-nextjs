import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-foreground">Home</h1>
      <Button variant="destructive" size="lg">Click me</Button>
    </div>
  );
}