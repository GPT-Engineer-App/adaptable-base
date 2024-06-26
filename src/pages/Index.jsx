import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Hello, World!",
      description: "This is a toast notification.",
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Your App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <Button onClick={handleClick} className="w-full">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;