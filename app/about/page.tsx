
const skills = [
  "Nothing yet, or atleast that i know of",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          Hello, Im Jeanand Maloles from BSIT-2B.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Who I Am</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a Student in Naga College Foundation, currently pursuing a degree in Bachelor of Science in Information Technology. I have a strong passion for web development and enjoy creating user-friendly and visually appealing web applications. My journey in the tech world has been fueled by curiosity and a desire to continuously learn and improve my skills.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me playing games like valorant with my friends, watching movies, tv shows and anime.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((item) => (
              <span key={item} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
