const motivationalQuotes = [
    "Be uncommon amongst uncommon people. – David Goggins",
    "Discipline is doing what you hate to do but doing it like you love it. – Mike Tyson",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. – Marie Forleo",
    "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential. – David Goggins",
    "Don’t stop when you’re tired. Stop when you’re done. – David Goggins",
    "The only way to define your limits is by going beyond them. – Arthur C. Clarke",
    "Your future is created by what you do today, not tomorrow. – Robert Kiyosaki",
    "It’s supposed to be hard. If it were easy, everyone would do it. – Tom Hanks",
    "You don’t find willpower, you create it. – David Goggins",
    "Fall seven times, stand up eight. – Japanese Proverb",
    "Work hard in silence, let your success be your noise. – Frank Ocean",
    "Pain unlocks a secret doorway in the mind, one that leads to both peak performance, and beautiful silence. – David Goggins",
    "Suffer now and live the rest of your life as a champion. – Muhammad Ali",
    "Don’t let your mind hold you back – you are more capable than you think. – Unknown",
    "The successful warrior is the average man, with laser-like focus. – Bruce Lee"
  ];
  
export const randomQuote = () => {return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];}
