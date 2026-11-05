import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Dumbbell, Plane, BookOpen, Ham } from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description: "I Always like taking photos with my phone but my cousin usually say i trash at taking photos",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "I enjoy playing games with my friends, especially competitive multiplayer games like Valorant and Roblox Horror Games.",
  },
  {
    title: "Music",
    icon: Music,
    description: "I enjoy listening to japanese music even without understanding any of the lyrics, but still enjoying the melodies and rhythms.",
  },
  {
    title: "Eating",
    icon: Ham,
    description: "I Enjoy eating different kinds of food, especially the drinks, i usually try a new one whenever i go to 7/11 or LCC",
  },
  {
    title: "Travel",
    icon: Plane,
    description: "I enjoy riding my motorcycle and going to places ive never been to before.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "I always read mangas and manhuas on my free time.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
